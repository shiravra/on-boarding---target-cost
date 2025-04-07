import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TargetCost } from "./screens/TargetCost";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <TargetCost />
  </StrictMode>,
);
