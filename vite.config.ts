import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Plain Vite + React SPA configuration.
// The frontend is a single-page app (React Router) that talks to the Laravel
// API. In dev, requests to /api are proxied to the Laravel server so the
// enquiry form can post to a same-origin path.
export default defineConfig({
  plugins: [react(), tailwindcss(), tsConfigPaths()],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: process.env.VITE_API_PROXY_TARGET ?? "http://localhost:8000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
});
