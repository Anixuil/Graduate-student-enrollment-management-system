import { RouteRecordRaw } from 'vue-router'

//配置普通用户的路由

const indexRoutes: RouteRecordRaw[] = [
    {
        path: '/index',
        name: 'index',
        component: () => import('@/views/index/index.vue'),
        meta: {
            title: '首页',
            transition: 'slide-fade',
            roles: ['student']
        },
        alias: '/'
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/index.vue'),
        meta: {
            title: '登录页',
            transition: 'slide-fade',
            roles: ['student', 'teacher', 'admin']
        },
        alias: '/welcome'
    },
    {
        path: '/person',
        name: 'person',
        component: () => import('@/views/person/index.vue'),
        meta: {
            title: '个人主页',
            transition: 'slide-fade',
            roles: ['student']
        },
        alias: '/my'
    },
    {
        path: '/confirmInfo',
        name: 'confirmInfo',
        component: () => import('@/views/controller/confirmInfo/index.vue'),
        meta: {
            title: '确认报名信息',
            transition: 'slide-fade',
            roles: ['student']
        }
    },
    {
        path: '/confirmInter',
        name: 'confirmInter',
        component: () => import('@/views/controller/confirmInter/index.vue'),
        meta: {
            title: '网上确认',
            transition: 'slide-fade',
            roles: ['student']
        }
    },
    {
        path: '/ticket',
        name: 'ticket',
        component: () => import('@/views/controller/ticket/index.vue'),
        meta: {
            title: '准考证打印',
            transition: 'slide-fade',
            roles: ['student']
        }
    },
    {
        path: '/result',
        name: 'result',
        component: () => import('@/views/controller/result/index.vue'),
        meta: {
            title: '成绩查询',
            transition: 'slide-fade',
            roles: ['student']
        }
    }
]

export default indexRoutes
