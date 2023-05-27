import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./index.tsx";

createRoot(document.querySelector("#root") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
