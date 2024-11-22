import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
// import 'virtual:svg-icons-register'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
