/// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

/// Intergrations
import tailwind from '@astrojs/tailwind';

/// Export config
export default defineConfig({
  integrations: [tailwind()],
  vite: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
});
