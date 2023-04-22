import { usePageHeader } from '@/store'
import { useUser } from '@/store/user'
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
const freeRouterArr: string[] = ['login', 'register']
//获取用户信息
const userStore = useUser(pinia)

router.beforeEach(to => {
    //如果是跳转的可以自由访问的页面，就不需要判断是否登录
    if (freeRouterArr.includes(to.name as string)) {
        return true
    }
    //如果没有登录，就跳转到登录页面
    if (!localStorage.getItem('token')) {
        ElNotification({
            title: '提示',
            message: '请先登录',
            type: 'warning'
        })
        return { name: 'login' }
    }
    //如果当前角色不符合权限，就提示没有权限并不放行
    if (to.meta.roles && !to.meta.roles.includes(userStore.userRole)) {
        ElNotification({
            title: '提示',
            message: '权限不足，无法访问，跳转至当前权限首页',
            type: 'warning'
        })
        if (userStore.userRole === 'admin' || userStore.userRole === 'teacher')
            return { name: 'adminIndex' }
        return { name: 'index' }
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
