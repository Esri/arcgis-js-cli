import commonjs from '@rollup/plugin-commonjs';
import copy from 'rollup-plugin-copy'
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss'
import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';
// import html from '@rollup/plugin-html';

import fs from 'fs';
import path from 'path';

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

// const src = (...args) => path.join('src', ...args);

// const indexPage = fs.readFileSync(path.resolve(__dirname, 'src/index.html'), 'utf-8');

export default {
  input: 'src/index.ts',
  output: {
    // entryFileNames: '[name].js',
    chunkFileNames: 'chunks/[name].[hash].js',
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    del({ targets: 'dist/', runOnce: true, verbose: true }),
    resolve(),
    commonjs(),
    production && terser(),
    typescript({
      // make sure to use latest
      // version of typescript
      typescript: require('typescript'),
    }),
    postcss({ extract: true }),
    copy({
      targets: [
        { src: 'src/index.html', dest: 'dist/' },
        { src: 'src/oauth-callback.html', dest: 'dist/' },
        { src: 'node_modules/@arcgis/core/assets/', dest: 'dist/' }
      ],
      copyOnce: true
    })
  ],
  preserveEntrySignatures: false
};
