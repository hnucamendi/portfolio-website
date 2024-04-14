import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vite.js.dev/config
export default defineConfig({
  plugins: [react()],
})
