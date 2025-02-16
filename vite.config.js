import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  publicDir: "public",  // Ensures `index.html` is used correctly
  build: {
    outDir: "dist",
  },
});
