/**
 * Client entry point for the React SPA.
 * (Replaces the TanStack Start auto-generated entry + src/server.ts / src/start.ts.)
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";
import "./styles.css";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element #root not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>,
);
