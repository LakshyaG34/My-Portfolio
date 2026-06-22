import axios from "axios";

export const API =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api";

const LS_TOKEN = "fx_token";

/**
 * Redirect helper that works in both the browser and inside a Capacitor
 * WebView. In Capacitor, the origin is `capacitor://localhost`, so using
 * absolute paths like `/login` with `window.location.href` still resolves
 * correctly because the asset is bundled on-device. We use `assign` so
 * the navigation is pushed into history (allowing back gestures).
 */
function goToLogin() {
  if (typeof window === "undefined") return;
  // Don't redirect if we're already on /login.
  if (window.location?.pathname === "/login") return;
  try {
    window.location.assign("/login");
  } catch {
    window.location.href = "/login";
  }
}

// Create axios instance
export function api() {
  const instance = axios.create({
    baseURL: API,
    withCredentials: false,
  });

  // Attach token to every request
  instance.interceptors.request.use((config) => {
    const token = localStorage.getItem(LS_TOKEN);

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  });

  // Handle unauthorized responses
  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401) {
        console.warn("[AUTH] Session expired.");

        // Clear auth
        localStorage.removeItem("fx_token");
        localStorage.removeItem("fx_roles");
        localStorage.removeItem("fx_user");

        // Use a non-blocking toast/console message. `alert()` is
        // ugly on native, and `confirm()` actually blocks the WebView
        // main thread on some Android versions.
        if (typeof window !== "undefined") {
          console.warn("Session expired. Redirecting to login.");
        }

        goToLogin();
      }

      return Promise.reject(error);
    }
  );

  if (import.meta.env.DEV) {
    console.log("[API] Base URL =", API);
  }

  return instance;
}
