import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./pages/app.tsx";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
