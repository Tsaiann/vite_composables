import { defineConfig } from 'vite'
import path, { resolve } from "path";
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [vue({
    script:{
      defineModel: true,
    }
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "assets": path.resolve(__dirname, "src/assets/"),
      "img": path.resolve(__dirname, "src/img"),
      "styles": path.resolve(__dirname, "src/styles/"),
      "pages": path.resolve(__dirname, "src/pages/"),
    },
    build: {
      // 這裡用的是底層相依套件Rollup，設定入口頁面和打包出來的各個資源目錄要長什麼樣子
      // 和Vue、React等不同，這份教學展示的是靜態網頁，所以可以設定多個入口HTML檔彼此連結
      rollupOptions: {
        input: {
          // 首頁須使用main作為命名，指向index.html，其他依照檔名即可
          main: resolve(__dirname, "index.html"),
        },
      },
      cssCodeSplit: false,
    },
  }
})
