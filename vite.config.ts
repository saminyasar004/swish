import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        path.resolve(__dirname, ""), // Project root (e.g., C:/Users/workm/Desktop/SWISH/swish/)
        path.resolve(__dirname, "src/i18n/locales"), // Locales directory for i18n
      ],
    },
    // host: "::",
    port: 7890,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
