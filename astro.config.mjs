import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  compressHTML: false,

  build: {
      assets: 'assets',
      format: 'file',
	},

  vite: {
      plugins: [tailwindcss()],
      build: {
          assetsInlineLimit: 0,
          rollupOptions: {
              output: {
                  entryFileNames: 'assets/main.js',
                  assetFileNames: 'assets/main[extname]',
              },
          },
      },
	},

  output: 'static',
});
