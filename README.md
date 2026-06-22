# FunctionX Mobile

The FunctionX web app (React + Vite) wrapped with
[Capacitor](https://capacitorjs.com) so it can be built and
published as a native **Android** and **iOS** app while keeping a
single codebase.

## TL;DR

```bash
npm install

# Web (same as before)
npm run dev
npm run build

# Mobile
npx cap add android         # one time, any OS
npx cap add ios             # one time, macOS only
npm run cap:sync            # rebuild web + push to native projects
npm run cap:open:android    # opens Android Studio
npm run cap:open:ios        # opens Xcode (macOS only)
```

## Read this before you build

**[→ BUILD_GUIDE.md](./BUILD_GUIDE.md)** — complete step-by-step
guide covering what to install, how to configure signing, how to
generate a release `.aab` / `.ipa`, what to test, and known
gotchas.

## What's different from the web version

All differences live in these files — nothing else in your app
was changed:

| File                  | What changed                                          |
| --------------------- | ----------------------------------------------------- |
| `package.json`        | Added Capacitor core, CLI, and 8 plugins              |
| `capacitor.config.js` | **New** — native app id, splash, status bar, keyboard |
| `index.html`          | Mobile viewport with `viewport-fit=cover`, no zoom    |
| `src/index.css`       | iOS safe-area padding + overscroll fixes              |
| `src/main.jsx`        | Calls `initNative()` on boot                          |
| `src/App.jsx`         | Uses native push plugin on device, web push on browser |
| `src/lib/native.js`   | **New** — back button, status bar, keyboard, splash, push |
| `src/lib/api.js`      | Removed blocking `alert()` on 401                     |
| `.env.example`        | Warnings about using public HTTPS URLs for mobile     |
| `.gitignore`          | Ignores Android/iOS build artifacts                   |

The rest of `src/` — your Dashboard pages, components, Redux
store, Firebase wiring, Socket.IO client, the whole router — is
**identical to the web version**. It just runs inside a native
WebView now.

## App identity

Default values (change in `capacitor.config.js` if you want):

- **App ID:** `com.functionxtechnologies.app`
- **App name:** `FunctionX`
- **Web assets directory:** `dist/`
