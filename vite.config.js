import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import compression from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // GZIP
    compression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 10240, // Hanya kompres file > 10KB
      deleteOriginalAssets: false,
    }),
    // BROTLI
    compression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
      deleteOriginalAssets: false,
    }),
  ],
  build: {
    minify: "terser",
  },
});
