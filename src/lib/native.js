/**
 * src/lib/native.js
 *
 * Initializes native-only behaviour when the app runs inside Capacitor
 * (Android / iOS). In a regular browser, `Capacitor.isNativePlatform()`
 * returns false and nothing here runs — the web build stays untouched.
 *
 * Responsibilities:
 *   • Hardware back button on Android (don't exit app on first press)
 *   • Status bar styling
 *   • Auto-hide splash screen after the app mounts
 *   • Register native push notifications with OneNotify
 *
 * Call initNative() once from main.jsx after the store/router are ready.
 */
import { Capacitor } from '@capacitor/core';

/** True only on Android/iOS inside Capacitor. False in a normal browser. */
export const isNative = () => {
  try {
    return Capacitor?.isNativePlatform?.() === true;
  } catch {
    return false;
  }
};

/** Wire up the Android hardware back button to use router history. */
async function wireBackButton(navigate) {
  if (!isNative()) return;
  const { App } = await import('@capacitor/app');

  App.addListener('backButton', ({ canGoBack }) => {
    // If we're on a primary route, exit. Otherwise go back in history.
    if (canGoBack) {
      window.history.back();
    } else {
      App.exitApp();
    }
  });
}

/** Tweak the native status bar so it matches our dark theme. */
async function configureStatusBar() {
  if (!isNative()) return;
  try {
    const { StatusBar, Style } = await import('@capacitor/status-bar');
    await StatusBar.setStyle({ style: Style.Dark });
    if (Capacitor.getPlatform() === 'android') {
      await StatusBar.setBackgroundColor({ color: '#000000' });
    }
    await StatusBar.setOverlaysWebView({ overlay: false });
  } catch (err) {
    console.warn('[Native] StatusBar setup failed:', err?.message);
  }
}

/** Hide the splash screen once the webview has loaded. */
async function hideSplash() {
  if (!isNative()) return;
  try {
    const { SplashScreen } = await import('@capacitor/splash-screen');
    await SplashScreen.hide();
  } catch (err) {
    console.warn('[Native] SplashScreen.hide failed:', err?.message);
  }
}

/** Soft keyboard adjustments so inputs aren't covered. */
async function configureKeyboard() {
  if (!isNative() || Capacitor.getPlatform() !== 'ios') return;
  try {
    const { Keyboard } = await import('@capacitor/keyboard');
    // KeyboardResize.Body is the safest default for React apps.
    await Keyboard.setResizeMode({ mode: 'body' });
    await Keyboard.setScroll({ isDisabled: false });
  } catch (err) {
    console.warn('[Native] Keyboard setup failed:', err?.message);
  }
}

/**
 * Register for native push notifications. On native platforms this uses
 * APNs (iOS) / FCM (Android). The token is posted to OneNotify's /register
 * endpoint so the same backend code that handles web push works here too.
 */
export async function registerNativePush(user) {
  if (!isNative()) return false;
  if (!user?.id) return false;

  try {
    const { PushNotifications } = await import('@capacitor/push-notifications');

    const perm = await PushNotifications.checkPermissions();
    let granted = perm.receive === 'granted';
    if (!granted) {
      const req = await PushNotifications.requestPermissions();
      granted = req.receive === 'granted';
    }
    if (!granted) return false;

    await PushNotifications.register();

    // Token from APNs or FCM comes back asynchronously.
    PushNotifications.addListener('registration', async (token) => {
      try {
        const ONENOTIFY_API =
          import.meta.env.VITE_ONENOTIFY_API_URL ||
          'https://onenotify.functionxtechnologies.com/api/sdk';
        const ONENOTIFY_KEY = import.meta.env.VITE_ONENOTIFY_API_KEY || '';
        const platform = Capacitor.getPlatform(); // 'ios' | 'android'

        await fetch(ONENOTIFY_API + '/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': ONENOTIFY_KEY,
          },
          body: JSON.stringify({
            user_id: String(user.id),
            fcm_token: token.value,
            platform,
          }),
        });
        console.log('[Native Push] Token registered:', platform);
      } catch (err) {
        console.warn('[Native Push] Token upload failed:', err?.message);
      }
    });

    PushNotifications.addListener('registrationError', (err) => {
      console.warn('[Native Push] registration error:', err?.error);
    });

    // Show received foreground pushes inline if desired.
    PushNotifications.addListener('pushNotificationReceived', (notif) => {
      console.log('[Native Push] received:', notif);
    });

    PushNotifications.addListener('pushNotificationActionPerformed', (action) => {
      // When the user taps the notification, you can route them somewhere.
      console.log('[Native Push] tapped:', action);
    });

    return true;
  } catch (err) {
    console.warn('[Native Push] init failed:', err?.message);
    return false;
  }
}

/** Single entry point — call once from main.jsx. */
export async function initNative() {
  if (!isNative()) return;
  await configureStatusBar();
  await configureKeyboard();
  await wireBackButton();
  // SplashScreen is hidden once the first real paint has happened.
  // Defer a tick so React has a chance to render.
  setTimeout(hideSplash, 300);
}
