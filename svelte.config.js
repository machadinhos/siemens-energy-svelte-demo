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
      '$components-ui': 'src/lib/components/ui/index.ts',
      '$components-attachments': 'src/lib/components/attachments/index.ts',
      '$components-svg-icons': 'src/lib/components/svg-icons/index.ts',
      '$components-modals': 'src/lib/components/modals/index.ts',
      $state: 'src/lib/state/index.ts',
      $services: 'src/lib/services/index.ts',
      $types: 'src/lib/types/index.ts',
    },
  },
};

export default config;
