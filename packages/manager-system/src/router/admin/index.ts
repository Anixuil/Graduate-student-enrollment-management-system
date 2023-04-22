import { RouteRecordRaw } from 'vue-router'

const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/index',
        component: () => import('@/views/admin/index.vue'),
        alias: '/manager',
        meta: {
            title: '管理后台',
            transition: 'slide-fade',
            roles: ['teacher', 'admin']
        },
        children: [
            {
                path: 'index',
                name: 'adminIndex',
                component: () => import('@/components/admin/index/index.vue'),
                meta: {
                    title: '首页',
                    transition: 'slide-fade',
                    roles: ['teacher', 'admin']
                }
            },
            {
                path: 'person',
                name: 'adminPerson',
                component: () => import('@/views/admin/person.vue'),
                meta: {
                    title: '个人中心',
                    transition: 'slide-fade',
                    roles: ['teacher', 'admin']
                }
            },
            {
                path: 'user',
                name: 'adminUser',
                component: () => import('@/views/admin/user/index.vue'),
                meta: {
                    title: '用户管理',
                    transition: 'slide-fade',
                    roles: ['teacher', 'admin']
                },
                children: [
                    {
                        path: 'candidate',
                        name: 'adminUserCandidate',
                        component: () => import('@/views/admin/user/candidate/index.vue'),
                        meta: {
                            title: '考生模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'student',
                        name: 'adminUserStudent',
                        component: () => import('@/views/admin/user/student/index.vue'),
                        meta: {
                            title: '学生模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'teacher',
                        name: 'adminUserTeacher',
                        component: () => import('@/views/admin/user/teacher/index.vue'),
                        meta: {
                            title: '教师模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    }
                ]
            },
            {
                path: 'school',
                name: 'adminSchool',
                component: () => import('@/views/admin/school/index.vue'),
                meta: {
                    title: '学校管理',
                    transition: 'slide-fade',
                    roles: ['teacher', 'admin']
                },
                children: [
                    {
                        path: 'department',
                        name: 'adminSchoolDepartment',
                        component: () => import('@/views/admin/school/depart/index.vue'),
                        meta: {
                            title: '院系模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'major',
                        name: 'adminSchoolMajor',
                        component: () => import('@/views/admin/school/major/index.vue'),
                        meta: {
                            title: '专业模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'class',
                        name: 'adminSchoolClass',
                        component: () => import('@/views/admin/school/class/index.vue'),
                        meta: {
                            title: '课程模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'exam',
                        name: 'adminSchoolExam',
                        component: () => import('@/views/admin/school/exam/index.vue'),
                        meta: {
                            title: '考试模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'plan',
                        name: 'adminSchoolPlan',
                        component: () => import('@/views/admin/school/plan/index.vue'),
                        meta: {
                            title: '招生模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    }
                ]
            },
            {
                path: 'info',
                name: 'adminInfo',
                component: () => import('@/views/admin/info/index.vue'),
                meta: {
                    title: '信息管理',
                    transition: 'slide-fade',
                    roles: ['teacher', 'admin']
                },
                children: [
                    {
                        path: 'banner',
                        name: 'adminInfoBanner',
                        component: () => import('@/views/admin/info/banner/index.vue'),
                        meta: {
                            title: '轮播模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    },
                    {
                        path: 'notice',
                        name: 'adminInfoNotice',
                        component: () => import('@/views/admin/info/notice/index.vue'),
                        meta: {
                            title: '公告模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        }
                    }
                ]
            },
            {
                path: 'system',
                name: 'adminSystem',
                component: () => import('@/views/admin/system/index.vue'),
                meta: {
                    title: '系统管理',
                    transition: 'slide-fade',
                    roles: ['teacher', 'admin']
                },
                children: [
                    {
                        path: 'process',
                        name: 'adminProcess',
                        component: () => import('@/views/admin/system/process/index.vue'),
                        meta: {
                            title: '流程模块',
                            transition: 'slide-fade',
                            roles: ['teacher', 'admin']
                        },
                        alias: 'workflow'
                    },
                    {
                        path: 'log',
                        name: 'adminOperationLog',
                        component: () => import('@/views/admin/system/log/index.vue'),
                        meta: { title: '日志模块', transition: 'slide-fade', roles: ['admin'] }
                    }
                ]
            }
        ]
    }
]

export default adminRoutes
