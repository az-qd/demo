import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // server: {
  //   proxy: {
  //     '/app': {
  //       target: 'https://bmsxcx.dachexing.net/Dcx_Bms1/manage/bmsmanage.ashx',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/app/, '')
  //     }
  //   }
  // }
})
