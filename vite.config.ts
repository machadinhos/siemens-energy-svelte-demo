import { defineConfig } from 'vite';
import devtoolsJson from 'vite-plugin-devtools-json';
import { sveltekit } from '@sveltejs/kit/vite';
import tailwindcss from '@tailwindcss/vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [{ src: 'node_modules/tinymce/*', dest: 'tinymce' }],
    }),
    tailwindcss(),
    sveltekit(),
    devtoolsJson(),
  ],
});
