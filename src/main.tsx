import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./pages/app.tsx";
import "@unocss/reset/tailwind.css";
import "@fontsource/noto-sans-jp";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
