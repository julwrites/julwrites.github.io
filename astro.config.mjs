import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

import yeskunallumami from "@yeskunall/astro-umami";

// https://astro.build/config
export default defineConfig({
  site: "https://tehj.io",
  integrations: [
    mdx(),
    sitemap(),
    vue(),
    tailwind(),
    yeskunallumami({
      endpointUrl: "https://umami.tehj.io",
      id: "73173525-4cfd-4b92-a118-04a8135c2c82",
    }),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["fsevents"],
    },
    build: {
      rollupOptions: {
        external: ["fsevents"],
      },
    },
  },
});
