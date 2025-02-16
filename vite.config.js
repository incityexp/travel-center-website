import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  root: ".",  // Ensures Vite looks in the correct location
  publicDir: "public",  // Ensures `index.html` is used correctly
  build: {
    outDir: "dist",  // Netlify/Vercel will use this folder
  }
});
