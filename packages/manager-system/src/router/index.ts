import { usePageHeader } from '@/store'
import pinia from '@/store'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
//配置路由
const routes: RouteRecordRaw[] = [
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
            title: '首页',
            transition: 'slide-fade'
        },
        alias: '/'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录页',
            transition: 'slide-fade'
        },
        alias: '/welcome'
    }
]

//创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

const store = usePageHeader(pinia)
router.beforeEach((to, from) => {
    if (to.name === 'login') {
        store.changePageHeaderStatus(false)
    } else {
        store.changePageHeaderStatus(true)
    }
})

export default router
