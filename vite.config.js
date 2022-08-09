/// <reference types="vitest" />
/// <reference types="vite/client" />

const path = require("path");
export default {
  root: path.resolve(__dirname, "src"),
  resolve: {
    alias: {
      "~bootstrap": path.resolve(__dirname, "node_modules/bootstrap"),
    },
  },
  server: {
    port: 5000,
    hot: true,
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
};
