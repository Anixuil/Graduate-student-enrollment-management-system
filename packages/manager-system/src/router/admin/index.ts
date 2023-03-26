import { RouteRecordRaw } from 'vue-router'

const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/',
        component: () => import('@/views/admin/index.vue'),
        alias: '/manager',
        children: [
            {
                path: '/admin/',
                name: 'adminIndex',
                component: () => import('@/components/admin/index/index.vue'),
                meta: {
                    title: '信息管理',
                    transistion: 'slide-fade'
                },
                alias: '/admin/index'
            }
        ]
    }
]

export default adminRoutes
