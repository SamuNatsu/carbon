// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

// Intergrations
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// Export config
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/carbon/' : undefined,
  integrations: [tailwind(), icon({ include: { mdi: ['*'] } })],
  site: process.env.GITHUB_ACTIONS ? 'https://samunatsu.github.io' : undefined,
  vite: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
});
