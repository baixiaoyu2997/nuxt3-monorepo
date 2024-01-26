import path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // base: "./",
  // resolve: {
  //   alias: {
  //     "@": path.resolve(__dirname, "./"),
  //   },
  // },
  build: {
    // target: "esnext",
    lib: {
      entry: "./index.ts",
      formats: ["es"],
    },
    // minify: false,
    // sourcemap: true,
    rollupOptions: {
      // treeshake: false,
      output: {
        dir: "dist",
        format: "es",
        exports: "named",
        entryFileNames: "[name].mjs",
        preserveModules: true, // Keep directory structure and files
        // preserveModulesRoot: 'src',
      },
    },
  },
});
