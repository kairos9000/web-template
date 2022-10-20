import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import checker from "vite-plugin-checker";

export default defineConfig({
    plugins: [react(), checker({ typescript: true })],
    server: {
        open: true,
        host: true,
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "@testing-library/jest-dom/extend-expect",
    },
});
