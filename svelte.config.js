import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  vitePlugin: {
    inspector: true,
  },

  kit: {
    adapter: adapter(),
    alias: {
      $components: 'src/lib/components/index.ts',
      $state: 'src/lib/state/index.ts',
      '$components-attachments': 'src/lib/components/attachments/index.ts',
      $types: 'src/lib/types/index.ts',
    },
  },
};

export default config;
