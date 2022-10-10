import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from '@vueuse/head'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './index.css'
import router from './router'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const head = createHead()

createApp(App).use(pinia).use(router).use(head).mount('#app')
