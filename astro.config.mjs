// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Fonts are downloaded at build time and served from our own domain, so visitors' browsers never contact Google.
  fonts: [
    {
      // Used for all text on the site, headings and body alike.
      name: 'Raleway',
      cssVariable: '--font-raleway',
      provider: fontProviders.google(),
      weights: ['400 800'],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
