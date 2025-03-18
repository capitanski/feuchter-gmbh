// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
//import react from "@astrojs/react";
// Make sure to uncomment the base when publishing to GITHUB PAGES
// https://astro.build/config
export default defineConfig({
  site: "https://capitanski.github.io/",
  //integrations: [react()],
  outDir: "./docs",
  output: "server",
  adapter: node({ mode: "standalone" }),
  //base: 'matuschek',
  build: {
    assets: "custom-folder",
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
