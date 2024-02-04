import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(), 
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'assets/img/svg')],
      symbolId: '[dir]-[name]',
      customDomId: '__svg__icons__dom__',
    })
  ],
})
