/// Astro config
import { defineConfig } from 'astro/config';

/// Intergrations
import tailwind from '@astrojs/tailwind';

/// Export config
export default defineConfig({
  integrations: [tailwind()]
});
