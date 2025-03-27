// @ts-check
import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import mdx from "@astrojs/mdx";
//import react from "@astrojs/react";
// Make sure to uncomment the base when publishing to GITHUB PAGES
// https://astro.build/config
export default defineConfig({
  site: "http://192.168.178.48:4321/",
  integrations: [mdx()],
  //outDir: "./docs",
  output: "server",
  adapter: node({ mode: "standalone" }),
  //base: 'matuschek',
  build: {
    assets: "custom-folder",
  },
  server: {
    host: true,
  },
  vite: {
    resolve: {
      alias: {
        "@": "/src",
      },
    },
  },
});
