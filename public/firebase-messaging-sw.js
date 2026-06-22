// public/firebase-messaging-sw.js
// Service Worker for Firebase Cloud Messaging — handles push notifications
// when the web page is in the background or closed.
//
// IMPORTANT:
//  • This file MUST live at /firebase-messaging-sw.js on the served domain.
//    For Vite, that means it goes in the `public/` folder.
//  • Service workers cannot use `import.meta.env` — Firebase config has to be
//    hardcoded here. These are PUBLIC values (apiKey, projectId, etc.) — they
//    are safe to commit. Do NOT put any private keys here.
//  • If you change the Firebase project, update these values AND bump the
//    SW_VERSION below so browsers fetch the new file.

const SW_VERSION = '1.0.1';

importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.13.0/firebase-messaging-compat.js');

// ── Firebase config (replace with values from your Firebase Console) ──
// Console → Project Settings → General → Your apps → Web app → Config
firebase.initializeApp({
  apiKey:            'AIzaSyDO1pdPNLwOBYqo6KKFpDtnvp8iv0qw0cE',
  authDomain:        'functionx-e7261.firebaseapp.com',
  projectId:         'functionx-e7261',
  storageBucket:     'functionx-e7261.firebasestorage.app',
  messagingSenderId: '573013718918',
  appId:             '1:573013718918:web:018caf8c1dca29de4d5e07',
});

const messaging = firebase.messaging();

// ── Background message handler ─────────────────────────────────────
// Fires only when the page is NOT focused. Foreground messages are handled
// in the page itself via firebase.messaging().onMessage(...).
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw] Background message:', payload);

  const notif = payload.notification || {};
  const data  = payload.data || {};

  const title = notif.title || data.title || 'Notification';
  const body  = notif.body  || data.body  || '';

  self.registration.showNotification(title, {
    body,
    icon: notif.icon || '/icon-192.png',                 // optional
    badge: '/badge-72.png',                              // optional
    tag:   data.notification_id || undefined,            // de-dupe by id
    data:  data,                                         // forwarded to click handler
  });
});

// ── Click handler ──────────────────────────────────────────────────
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  const data       = event.notification.data || {};
  const targetUrl  = data.click_url || '/';
  const notifId    = data.notification_id;

  event.waitUntil((async () => {
    // Track click via OneNotify (best-effort)
    if (notifId) {
      try {
        await fetch('https://onenotify.functionxtechnologies.com/api/sdk/event', {
          method:  'POST',
          headers: {
            'Content-Type': 'application/json',
            // Replace with your actual API key — same one your frontend uses
            'X-API-Key':    'on_59d25007f9128c284a3616a633cd1e38',
          },
          body: JSON.stringify({
            notification_id: notifId,
            event_type:      'click',
          }),
        });
      } catch (_) { /* swallow — don't block navigation */ }
    }

    // Focus an existing tab on the same origin if one is open, else open new
    const allClients = await clients.matchAll({ type: 'window', includeUncontrolled: true });
    for (const client of allClients) {
      if (new URL(client.url).origin === self.location.origin && 'focus' in client) {
        client.navigate(targetUrl);
        return client.focus();
      }
    }
    if (clients.openWindow) return clients.openWindow(targetUrl);
  })());
});

// ── Lifecycle ──────────────────────────────────────────────────────
self.addEventListener('install',  () => { self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(self.clients.claim()); });