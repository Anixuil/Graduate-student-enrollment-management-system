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
            roles: ['student', 'candidate']
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
            roles: ['student', 'candidate', 'teacher', 'admin']
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
            roles: ['student', 'candidate']
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
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/ticket',
        name: 'ticket',
        component: () => import('@/views/controller/ticket/index.vue'),
        meta: {
            title: '准考证打印',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/secondInterview',
        name: 'secondInterview',
        component: () => import('@/views/controller/secondEnter/index.vue'),
        meta: {
            title: '复试确认',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/secondTicket',
        name: 'secondTicket',
        component: () => import('@/views/controller/secondTicket/index.vue'),
        meta: {
            title: '复试准考证打印',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/dispense',
        name: 'dispense',
        component: () => import('@/views/controller/dispense/index.vue'),
        meta: {
            title: '申请调剂',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/admission',
        name: 'admission',
        component: () => import('@/views/controller/admission/index.vue'),
        meta: {
            title: '录取确认',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/offer',
        name: 'offer',
        component: () => import('@/views/controller/offer/index.vue'),
        meta: {
            title: '录取通知书',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    },
    {
        path: '/choose',
        name: 'choose',
        component: () => import('@/views/controller/choose/index.vue'),
        meta: {
            title: '选择导师',
            transition: 'slide-fade',
            roles: ['student', 'candidate']
        }
    }
]

export default indexRoutes
