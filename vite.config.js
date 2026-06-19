import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/time-tracking-dashboard/",
  plugins: [react(), tailwindcss()],
});
