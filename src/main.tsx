import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { RecoilRoot } from "recoil";

import { App } from "./pages/app.tsx";

import "@unocss/reset/tailwind.css";
import "@fontsource/noto-sans-jp";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </StrictMode>
);
