// Astro config
import { defineConfig } from 'astro/config';
import { resolve } from 'path';

// Intergrations
import icon from 'astro-icon';
import tailwind from '@astrojs/tailwind';

// Remark plugins
import {
  remarkExtendedTable,
  extendedTableHandlers
} from 'remark-extended-table';

// Rehype plugins
import rehypeExternalLinks from 'rehype-external-links';

// Export config
export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/carbon' : undefined,
  integrations: [tailwind(), icon({ include: { mdi: ['*'] } })],
  markdown: {
    remarkPlugins: [remarkExtendedTable],
    remarkRehype: {
      handlers: { ...extendedTableHandlers }
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        { rel: ['noopener', 'noreferer'], target: '_blank' }
      ]
    ]
  },
  site: process.env.GITHUB_ACTIONS ? 'https://samunatsu.github.io' : undefined,
  vite: {
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
});
