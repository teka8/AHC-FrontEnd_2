import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: true,
    proxy: {
      "/api": {
        target:
          process.env.NODE_ENV === "production"
            ? "https://ahc.tewostech.com"
            : "http://localhost:8000",

        // target: 'http://localhost:8000',  // Local Laravel backend
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
