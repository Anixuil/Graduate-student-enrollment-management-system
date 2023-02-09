import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from '@/store'

createApp(App).use(router).use(pinia).mount('#app')
