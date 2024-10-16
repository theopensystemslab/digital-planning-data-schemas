import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import commonjs from 'vite-plugin-commonjs';
import prismjs from 'vite-plugin-prismjs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          [
            'prismjs',
            {
              languages: ['javascript'],
              plugins: [],
              theme: 'twilight',
              css: false,
            },
          ],
        ],
      },
    }),
    prismjs({
      languages: ['javascript'],
      plugins: [],
      theme: 'twilight',
      css: false,
    }),
    commonjs(),
  ],
  build: {
    commonjsOptions: {transformMixedEsModules: true},
  },
  base: '/digital-planning-data-schemas',
});
