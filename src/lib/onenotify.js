// src/lib/onenotify.js
// Handles web + android + ios push notifications
// Web    → Firebase Web SDK + service worker
// Native → @capacitor/push-notifications (already installed)

import { Capacitor } from '@capacitor/core';

// ── Platform detection ────────────────────────────────────────
function getPlatform() {
  if (typeof Capacitor !== 'undefined' && Capacitor.isNativePlatform()) {
    return Capacitor.getPlatform(); // 'android' or 'ios'
  }
  return 'web';
}

// ── Config from .env ──────────────────────────────────────────
const ONENOTIFY_API = import.meta.env.VITE_ONENOTIFY_API_URL;
const ONENOTIFY_KEY = import.meta.env.VITE_ONENOTIFY_API_KEY;
const VAPID_KEY     = import.meta.env.VITE_FIREBASE_VAPID_KEY;

// ── Internal API caller ───────────────────────────────────────
async function _post(path, body) {
  try {
    const res = await fetch(ONENOTIFY_API + path, {
      method:  'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-Key':    ONENOTIFY_KEY,
      },
      body: JSON.stringify(body),
    });
    return res.json();
  } catch (err) {
    console.warn('[OneNotify]', path, 'failed:', err.message);
    return null;
  }
}

// ── 1. Main entry: register push based on platform ───────────
export async function registerWebPush(userId) {
  const platform = getPlatform();
  console.log('[OneNotify] Platform:', platform);
 
  if (platform === 'android' || platform === 'ios') {
    return registerNativePush(userId, platform);
  } else {
    return registerWebBrowserPush(userId);
  }
}
 
// ── 2. Web browser push (Firebase Web SDK) ────────────────────
async function registerWebBrowserPush(userId) {
  if (!('Notification' in window)) {
    console.warn('[OneNotify] Notifications not supported in this browser');
    return false;
  }
  if (!('serviceWorker' in navigator)) {
    console.warn('[OneNotify] Service workers not supported in this browser');
    return false;
  }
  if (Notification.permission === 'denied') {
    console.warn('[OneNotify] Notifications blocked by user');
    return false;
  }
 
  // Ask for permission if not yet granted (no-op if already granted)
  const permission = await Notification.requestPermission();
  if (permission !== 'granted') {
    console.warn('[OneNotify] Permission not granted:', permission);
    // Permission was revoked since the last successful registration —
    // drop the cached token so a future grant retries cleanly.
    localStorage.removeItem('on_fcm_token');
    return false;
  }
 
  try {
    const { messaging, getToken } = await import('./firebase');
    if (!messaging) {
      console.warn('[OneNotify] Firebase messaging not available');
      return false;
    }
 
    // ── Register the SW and WAIT for it to be ACTIVATED ──
    // PushManager.subscribe() (called inside getToken) requires an active
    // registration; just calling .register() returns immediately even when
    // the worker is still installing, which is what caused the
    // "no active Service Worker" error before.
    try {
      await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
        scope: '/',
      });
    } catch (regErr) {
      console.error('[OneNotify] SW register failed:', regErr.message);
      localStorage.removeItem('on_fcm_token');
      return false;
    }
 
    // Resolves only when the registration has an *active* worker.
    const swReg = await navigator.serviceWorker.ready;
    console.log('[OneNotify] SW active, scope:', swReg.scope);
 
    // ── Mint the FCM token, with one retry ──
    let token = null;
    let lastErr = null;
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        token = await getToken(messaging, {
          vapidKey: VAPID_KEY,
          serviceWorkerRegistration: swReg,
        });
        if (token) break;
      } catch (tokenErr) {
        lastErr = tokenErr;
        console.warn(`[OneNotify] getToken attempt ${attempt} failed:`, tokenErr.message);
        if (attempt < 2) {
          await new Promise((r) => setTimeout(r, 1000));
        }
      }
    }
 
    if (!token) {
      console.warn(
        '[OneNotify] No FCM token after retries — clearing cached token',
        lastErr ? `(last error: ${lastErr.message})` : ''
      );
      localStorage.removeItem('on_fcm_token');
      return false;
    }
 
    // ── Send to OneNotify backend (skip if unchanged) ──
    const savedToken = localStorage.getItem('on_fcm_token');
    if (token !== savedToken) {
      const res = await _post('/register', {
        user_id:   String(userId),
        fcm_token: token,
        platform:  'web',
      });
 
      if (res?.success) {
        localStorage.setItem('on_fcm_token', token);
        console.log('[OneNotify] ✅ Web push registered for', userId);
      } else {
        console.warn('[OneNotify] /register did not return success — clearing cache');
        localStorage.removeItem('on_fcm_token');
        return false;
      }
    } else {
      console.log('[OneNotify] Token unchanged — skipping re-register');
    }
 
    return true;
  } catch (err) {
    console.error('[OneNotify] Web registration error:', err.message);
    // Drop the cache so next page load tries a fresh mint
    localStorage.removeItem('on_fcm_token');
    return false;
  }
}

// ── 3. Native push (@capacitor/push-notifications) ───────────
async function registerNativePush(userId, platform) {
  try {
    // ✅ Uses @capacitor/push-notifications — already in your project
    const { PushNotifications } = await import('@capacitor/push-notifications');

    const permResult = await PushNotifications.requestPermissions();
    console.log('[OneNotify] Native permission:', permResult.receive);

    if (permResult.receive !== 'granted') {
      console.warn('[OneNotify] Native push permission denied');
      return false;
    }

    await PushNotifications.register();

    return new Promise((resolve) => {

      // Token received ✅
      PushNotifications.addListener('registration', async (token) => {
        console.log('[OneNotify] Native token:', token.value?.slice(0, 30) + '...');

        const savedToken = localStorage.getItem('on_fcm_token');

        if (token.value !== savedToken) {
          const res = await _post('/register', {
            user_id:   String(userId),
            fcm_token: token.value,
            platform:  platform,  // 'android' or 'ios'
          });

          console.log('[OneNotify] API response:', JSON.stringify(res));

          if (res?.success) {
            localStorage.setItem('on_fcm_token', token.value);
            console.log('[OneNotify] ✅ Registered for', userId, 'on', platform);
          } else {
            console.error('[OneNotify] ❌ Register failed:', JSON.stringify(res));
          }
        } else {
          console.log('[OneNotify] Token unchanged');
        }

        resolve(true);
      });

      // Token error
      PushNotifications.addListener('registrationError', (err) => {
        console.error('[OneNotify] ❌ Error:', JSON.stringify(err));
        resolve(false);
      });

      // Safety timeout
      setTimeout(() => {
        console.warn('[OneNotify] ⚠️ Timeout after 10s');
        resolve(false);
      }, 10000);
    });

  } catch (err) {
    console.error('[OneNotify] Native push error:', err.message);
    return false;
  }
}

// ── 4. Foreground message handler ────────────────────────────
export async function onForegroundMessage(onReceive) {
  const platform = getPlatform();

  if (platform === 'android' || platform === 'ios') {
    try {
      const { PushNotifications } = await import('@capacitor/push-notifications');

      // Show when app is open
      await PushNotifications.addListener('pushNotificationReceived', (notification) => {
        console.log('[OneNotify] Foreground:', notification.title);
        onReceive?.(notification.title, notification.body, notification.data || {});
      });

      // Handle tap on notification
      await PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
        console.log('[OneNotify] Tapped:', action.notification?.title);
        const notifId = action.notification?.data?.notification_id;
        if (notifId) {
          _post('/event', { notification_id: notifId, event_type: 'click' });
        }
      });

    } catch (err) {
      console.warn('[OneNotify] Native foreground error:', err.message);
    }

  } else {
    try {
      const { messaging, onMessage } = await import('./firebase');
      if (!messaging) return;
      onMessage(messaging, (payload) => {
        const { title, body } = payload.notification || {};
        console.log('[OneNotify] Web foreground:', title);
        onReceive?.(title, body, payload.data || {});
      });
    } catch (err) {
      console.warn('[OneNotify] Web foreground error:', err.message);
    }
  }
}

// ── 5. Detect notification click from URL (web only) ─────────
export function detectNotificationClick() {
  if (getPlatform() !== 'web') return;
  const params  = new URLSearchParams(window.location.search);
  const notifId = params.get('notification_id');
  if (notifId) {
    _post('/event', { notification_id: notifId, event_type: 'click' });
  }
}

// ── 6. Main init — call once after login ─────────────────────
// ────────────────────────────────────────────────────────────────────────
// PATCH: src/lib/onenotify.js
//
// Replace the existing `initOneNotify` function (the one near the bottom
// of the file, currently at lines ~222–236) with the version below.
//
// Everything else in onenotify.js stays the same.
// ────────────────────────────────────────────────────────────────────────

// ── 6. Main init — call once after login ─────────────────────
export async function initOneNotifyOld(user) {
  if (!user?.id) return;
  console.log('[OneNotify] Init for user:', user.id, '| Platform:', getPlatform());

  detectNotificationClick();
  await registerWebPush(String(user.id));

  // Foreground display — platform-specific.
  // Android/iOS: when the app is open, FCM does NOT auto-display the push.
  //   We have to render it ourselves via @capacitor/local-notifications.
  // Web: the Service Worker does NOT handle pushes when the page is focused
  //   either — so we use the Web Notification API, same as before.
  await onForegroundMessage(async (title, body, data = {}) => {
    const platform = getPlatform();

    if (platform === 'android' || platform === 'ios') {
      try {
        const { LocalNotifications } = await import('@capacitor/local-notifications');

        // Permission check — usually inherited from PushNotifications, but be safe
        const perm = await LocalNotifications.checkPermissions();
        if (perm.display !== 'granted') {
          const req = await LocalNotifications.requestPermissions();
          if (req.display !== 'granted') {
            console.warn('[OneNotify] Local notif permission denied — foreground push not displayed');
            return;
          }
        }

        await LocalNotifications.schedule({
          notifications: [{
            id:    Date.now() % 2147483647,   // int32 — required by the plugin
            title: title || 'Notification',
            body:  body  || '',
            extra: data,
            // Optional: smallIcon, sound, channelId once you set up channels
          }],
        });
        console.log('[OneNotify] Foreground push displayed via LocalNotifications');
      } catch (err) {
        console.warn('[OneNotify] LocalNotifications failed:', err?.message);
      }
      return;
    }

    // Web fallback (unchanged behavior)
    if (platform === 'web' && typeof Notification !== 'undefined' &&
        Notification.permission === 'granted') {
      new Notification(title || 'Notification', { body: body || '' });
    }
  });

  console.log('[OneNotify] ✅ Done | Platform:', getPlatform());
}

// ── 6. Main init — call once after login ─────────────────────
export async function initOneNotify(user) {
  if (!user?.id) return;
  console.log('[OneNotify] Init for user:', user.id, '| Platform:', getPlatform());
 
  detectNotificationClick();
  await registerWebPush(String(user.id));
 
  // Foreground display — platform-specific.
  // Android/iOS: app open ⇒ FCM does NOT auto-display. Render via @capacitor/local-notifications.
  // Web:         page focused ⇒ Firebase delivers to onMessage instead of the SW's
  //              onBackgroundMessage. We have to render via SW.showNotification ourselves.
  await onForegroundMessage(async (title, body, data = {}) => {
    const platform = getPlatform();
 
    // ── Android / iOS branch ──
    if (platform === 'android' || platform === 'ios') {
      try {
        const { LocalNotifications } = await import('@capacitor/local-notifications');
 
        const perm = await LocalNotifications.checkPermissions();
        if (perm.display !== 'granted') {
          const req = await LocalNotifications.requestPermissions();
          if (req.display !== 'granted') {
            console.warn('[OneNotify] Local notif permission denied — foreground push not displayed');
            return;
          }
        }
 
        await LocalNotifications.schedule({
          notifications: [{
            id:    Date.now() % 2147483647,
            title: title || 'Notification',
            body:  body  || '',
            extra: data,
          }],
        });
        console.log('[OneNotify] Foreground push displayed via LocalNotifications');
      } catch (err) {
        console.warn('[OneNotify] LocalNotifications failed:', err?.message);
      }
      return;
    }
 
    // ── Web branch ──
    if (platform === 'web') {
      if (typeof Notification === 'undefined' || Notification.permission !== 'granted') {
        return;
      }
      try {
        // Modern API — works whether the page is focused or not, plays nicely
        // with the Service Worker, and isn't deprecated in current Chrome.
        const swReg = await navigator.serviceWorker.ready;
        await swReg.showNotification(title || 'Notification', {
          body:  body || '',
          icon:  '/icon-192.png',                   // optional, falls back if missing
          badge: '/badge-72.png',                   // optional
          tag:   data?.notification_id || undefined,
          data:  data || {},
        });
        console.log('[OneNotify] Foreground push displayed via SW.showNotification');
      } catch (err) {
        console.warn('[OneNotify] SW.showNotification failed:', err?.message);
        // Last-ditch fallback for very old browsers without an active SW
        try {
          // eslint-disable-next-line no-new
          new Notification(title || 'Notification', { body: body || '' });
        } catch (_) { /* swallow — already logged */ }
      }
    }
  });
 
  console.log('[OneNotify] ✅ Done | Platform:', getPlatform());
}

export default { initOneNotify, registerWebPush };