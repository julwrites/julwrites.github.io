import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vue from "@astrojs/vue";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tehj.io',
  integrations: [mdx(), sitemap(), vue(), tailwind()],
  vite: {
    optimizeDeps: {
      exclude: ['fsevents']
    },
    build: {
      rollupOptions: {
        external: ['fsevents']
      }
    }
  }
});
