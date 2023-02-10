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
    },
    {
        path: '/person',
        name: 'person',
        component: () => import('@/views/person/index.vue'),
        meta: {
            title: '个人主页',
            transition: 'slide-fade'
        },
        alias: '/my'
    }
]

//创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes
})

const store = usePageHeader(pinia)
const pageHeaderArr = ['login', 'index']
router.beforeEach(to => {
    if (pageHeaderArr.findIndex(item => item === to.name) !== -1) {
        store.changePageHeaderStatus(false)
    } else {
        store.changePageHeaderTitle(to.meta.title as string)
        store.changePageHeaderStatus(true)
    }
})

export default router
