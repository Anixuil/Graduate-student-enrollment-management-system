import { defineStore } from 'pinia'

export const useSidebar = defineStore('sidebar', {
    state: () => ({
        //侧边栏状态 true:展开  false:收起
        sidebarStatus: true,
        //侧边栏菜单
        sidebarMenu: [
            {
                name: '用户管理',
                icon: 'UserFilled',
                path: '/admin/user',
                children: []
            },
            {
                name: '学校管理',
                icon: 'School',
                path: '/admin/school',
                children: [
                    { name: '院系管理', icon: 'School', path: '/admin/school/department' },
                    { name: '专业管理', icon: 'School', path: '/admin/school/major' },
                    { name: '课程管理', icon: 'School', path: '/admin/school/class' },
                    { name: '考试科目管理', icon: 'School', path: '/admin/school/exam' },
                    { name: '招生计划管理', icon: 'School', path: '/admin/school/plan' }
                ]
            },
            {
                name: '公共管理',
                icon: 'SetUp',
                path: '/admin/info',
                children: [
                    { name: '轮播管理', icon: 'DataBoard', path: '/admin/info/banner' },
                    { name: '公告管理', icon: 'Document', path: '/admin/info/notice' }
                ]
            },
            {
                name: '流程管理',
                icon: 'Calendar',
                path: '/admin/process',
                children: []
            },
            {
                name: '操作管理',
                icon: 'Tools',
                path: '/admin/operation',
                children: [{ name: '操作日志', icon: 'Operation', path: '/admin/operation/log' }]
            }
        ]
    }),
    getters: {
        //获取侧边栏状态
        getSidebarStatus(): boolean {
            return this.sidebarStatus
        }
    },
    actions: {
        //切换侧边栏状态
        switchSidebarStatus(): boolean {
            this.sidebarStatus = !this.sidebarStatus
            return this.sidebarStatus
        }
    }
})
