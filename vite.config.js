import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("react-router-dom")) {
            return "react";
          }

          if (id.includes("framer-motion")) {
            return "motion";
          }

          if (id.includes("node_modules/three")) {
            return "three-core";
          }

          if (id.includes("@react-three/fiber")) {
            return "three-fiber";
          }

          if (id.includes("@react-three/drei") || id.includes("camera-controls") || id.includes("troika")) {
            return "three-drei";
          }

          return undefined;
        },
      },
    },
  },
});