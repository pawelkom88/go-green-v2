/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@src",
        replacement: new URL("./src/", import.meta.url).pathname,
      },
      {
        find: "@assets",
        replacement: new URL("./src/assets", import.meta.url).pathname,
      },
      {
        find: "@layout",
        replacement: new URL("./src/layout", import.meta.url).pathname,
      },
      {
        find: "@controllers",
        replacement: new URL("./src/controllers", import.meta.url).pathname,
      },
      {
        find: "@hooks",
        replacement: new URL("./src/hooks", import.meta.url).pathname,
      },
      {
        find: "@pages",
        replacement: new URL("./src/pages", import.meta.url).pathname,
      },
    ],
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
  },
});
