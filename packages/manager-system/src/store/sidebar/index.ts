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
                children: [
                    { name: '考生模块', icon: 'User', path: '/admin/user/candidate' },
                    { name: '学生模块', icon: 'User', path: '/admin/user/student' },
                    { name: '教师模块', icon: 'User', path: '/admin/user/teacher' },
                    { name: '培养模块', icon: 'User', path: '/admin/user/choose' }
                ]
            },
            {
                name: '学校管理',
                icon: 'School',
                path: '/admin/school',
                children: [
                    { name: '院系模块', icon: 'School', path: '/admin/school/department' },
                    { name: '专业模块', icon: 'School', path: '/admin/school/major' },
                    { name: '课程模块', icon: 'School', path: '/admin/school/class' },
                    { name: '考试模块', icon: 'School', path: '/admin/school/exam' },
                    { name: '招生模块', icon: 'School', path: '/admin/school/plan' }
                ]
            },
            {
                name: '信息管理',
                icon: 'SetUp',
                path: '/admin/info',
                children: [
                    { name: '轮播模块', icon: 'DataBoard', path: '/admin/info/banner' },
                    { name: '公告模块', icon: 'Document', path: '/admin/info/notice' }
                ]
            },
            {
                name: '操作管理',
                icon: 'Tools',
                path: '/admin/system',
                children: [
                    {
                        name: '流程管理',
                        icon: 'Calendar',
                        path: '/admin/system/process'
                    },
                    { name: '操作日志', icon: 'Operation', path: '/admin/system/log' }
                ]
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
