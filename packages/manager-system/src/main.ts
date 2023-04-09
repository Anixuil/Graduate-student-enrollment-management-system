import { createApp } from 'vue'
import './styles/reset.css'
import App from './App.vue'
import './styles/element/index.scss'

import router from './router'
import pinia from '@/store'
import axios from 'axios'
import Avue from '@smallwei/avue'
import '@smallwei/avue/lib/index.css'

import tab from '@/components/common/tab/index.vue'
import infoDetail from '@/components/common/infoDetail/index.vue'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//全局注册组件
app.component('tab', tab)
app.component('infoDetail', infoDetail)

app.use(router)
app.use(pinia)
app.use(ElementPlus, {
    locale: zhCn
})
app.use(Avue, {
    axios
})
app.mount('#app')
