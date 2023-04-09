import { usePageHeader } from '@/store'
import pinia from '@/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import indexRoutes from './common'
import adminRoutes from './admin'
import { ElNotification } from 'element-plus'

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
    //判断是否登录
    if (to.name !== 'login' && !localStorage.getItem('token')) {
        ElNotification({
            title: '未授权',
            message: '检测到您尚未登录，请先登录！',
            type: 'warning',
            position: 'bottom-right',
            duration: 5000
        })
        return { name: 'login' }
    }
    //判断是否需要显示页面头部
    isPageHeader(to)
})

//判断是否需要显示页面头部
function isPageHeader(to: any): void {
    if (pageHeaderArr.findIndex(item => item === to.name) !== -1) {
        store.changePageHeaderStatus(false)
    } else {
        store.changePageHeaderTitle(to.meta.title as string, to.path as string)
        store.changePageHeaderStatus(true)
    }
}

export default router
