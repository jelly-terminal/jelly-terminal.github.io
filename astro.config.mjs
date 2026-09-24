// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jelly-terminal.github.io',
  redirects: {
    '/docs': '/docs/start/introduction/'
  },
  integrations: [react(), sitemap()],

  markdown: {
    shikiConfig: { theme: 'tokyo-night' }
  },

  vite: {
    plugins: [tailwindcss()]
  }
});
