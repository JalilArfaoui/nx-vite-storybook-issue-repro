/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';

import viteTsConfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  cacheDir: '../../../node_modules/.vite/ui-components',

  plugins: [
    viteTsConfigPaths({
      root: '../../../',
    }),
  ],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [
  //    viteTsConfigPaths({
  //      root: '../../../',
  //    }),
  //  ],
  // },

  test: {
    globals: true,
    cache: {
      dir: '../../../node_modules/.vitest',
    },
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    setupFiles: [resolve(__dirname, '../../../vitest.setup.ts')],
  },
});
