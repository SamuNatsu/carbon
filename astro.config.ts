// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

// Intergrations
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// Export config
export default defineConfig({
  integrations: [tailwind(), icon({ include: { mdi: ['*'] } })],
  vite: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
});
