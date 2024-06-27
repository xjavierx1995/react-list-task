import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    include: [
      // Matches vitest tests in any subfolder of 'src/tests'
      // Matches all files with extension 'js', 'jsx', 'ts' and 'tsx'
      "tests/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}",
    ],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      reportsDirectory: "./public/coverage",
    },
    server: {},
  },
});
