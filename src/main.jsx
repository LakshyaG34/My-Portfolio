import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import "./scss/app.scss";

import App from "./App.jsx";
import { store } from "./redux/store";
import { initNative } from "./lib/native";

// Fire-and-forget: only runs on Android/iOS, no-op in browsers.
initNative().catch((err) =>
  console.warn("[Native] init failed:", err?.message)
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
