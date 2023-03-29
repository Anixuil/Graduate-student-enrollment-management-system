import { createApp } from 'vue'
import './reset.css'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from './router'
import pinia from '@/store'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

import tab from '@/components/common/tab/index.vue'
import infoDetail from '@/components/common/infoDetail/index.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//全局注册组件
app.component('tab', tab)
app.component('infoDetail', infoDetail)

app.use(Avue)
app.use(router)
app.use(pinia)
app.mount('#app')
