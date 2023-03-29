import { usePageHeader } from '@/store'
import pinia from '@/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import indexRoutes from './common'
import adminRoutes from './admin'

//配置路由
//合并路由
const routes: RouteRecordRaw[] = indexRoutes.concat(adminRoutes as RouteRecordRaw[])

//创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

const store = usePageHeader(pinia)
const pageHeaderArr = ['login']
router.beforeEach(to => {
    if (pageHeaderArr.findIndex(item => item === to.name) !== -1) {
        store.changePageHeaderStatus(false)
    } else {
        store.changePageHeaderTitle(to.meta.title as string, to.path as string)
        store.changePageHeaderStatus(true)
    }
})

export default router
