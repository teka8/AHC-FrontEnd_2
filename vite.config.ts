import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
    allowedHosts: [
      '.ngrok-free.app', // Allow all ngrok domains
      '.ngrok.io',       // Legacy ngrok domains
    ],
    proxy: {
      "/api": {
        target:
          process.env.NODE_ENV === "production"
            ? "https://ahcadmin.aau.edu.et"
            : "http://localhost:8000",

        // target: 'http://localhost:8000',  // Local Laravel backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
