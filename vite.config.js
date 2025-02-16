import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",  // Ensures correct asset paths in Netlify
  server: {
    open: true,
  },
  build: {
    outDir: "dist", // This ensures Netlify can use the correct folder
  }
});
