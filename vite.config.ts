import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { viteStaticCopy } from 'vite-plugin-static-copy';
import viteImagemin from 'vite-plugin-imagemin'
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
    viteImagemin({
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 80, // 壓縮 JPEG 品質 (1-100)
      },
      pngquant: {
        quality: [0.65, 0.8], // 壓縮 PNG 品質
        speed: 4,
      },
      webp: {
        quality: 80, // 生成 WebP 格式
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
