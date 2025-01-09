import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
  ? '/hotel-booking/' : '/',
  plugins: [
    vue(), 
    createSvgIconsPlugin({
      iconDirs: [path.resolve(process.cwd(), 'assets/img/svg')],
      symbolId: '[dir]-[name]',
      customDomId: '__svg__icons__dom__',
    }),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/img/*', // 要複製的資源來源路徑
          dest: 'img',            // 複製到輸出目錄下的目標文件夾
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
