import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'

// 創建 Pinia 實例
const pinia = createPinia()
// 加載 Pinia 的持久化插件
pinia.use(piniaPluginPersistedstate)

createApp(App).use(router).use(pinia).mount('#app')
