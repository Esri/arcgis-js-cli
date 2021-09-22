import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  plugins: [
    VitePWA(),
    // copy({
    //   targets: [ { src: 'node_modules/@arcgis/core/assets/', dest: './public/' }, ],
    //   hook: 'writeBundle'
    // })
  ],
  css: {
    preprocessorOptions: {
      scss : {
        sassOptions: {
          importer: function (url, prev, done) {
            console.log(url)
            const result = url.includes("@arcgis/core")
              ? url.replace("../", "./assets/esri/themes/")
              : url;
            return { file: result };
          }
        }
      }
    }
  }
});
