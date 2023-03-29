import { RouteRecordRaw } from 'vue-router'

const adminRoutes: RouteRecordRaw[] = [
    {
        path: '/admin',
        name: 'admin',
        redirect: '/admin/index',
        component: () => import('@/views/admin/index.vue'),
        alias: '/manager',
        children: [
            {
                path: 'index',
                name: 'adminIndex',
                component: () => import('@/components/admin/index/index.vue'),
                meta: {
                    title: '首页',
                    transistion: 'slide-fade'
                }
            },
            {
                path: 'user',
                name: 'adminUser',
                component: () => import('@/views/admin/user/index.vue'),
                meta: {
                    title: '用户管理',
                    transistion: 'slide-fade'
                },
                children: [
                    {
                        path: 'candidate',
                        name: 'adminUserCandidate',
                        component: () => import('@/views/admin/user/candidate/index.vue'),
                        meta: { title: '考生管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'student',
                        name: 'adminUserStudent',
                        component: () => import('@/views/admin/user/student/index.vue'),
                        meta: { title: '学生管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'teacher',
                        name: 'adminUserTeacher',
                        component: () => import('@/views/admin/user/teacher/index.vue'),
                        meta: { title: '教师管理', transistion: 'slide-fade' }
                    }
                ]
            },
            {
                path: 'school',
                name: 'adminSchool',
                component: () => import('@/views/admin/school/index.vue'),
                meta: {
                    title: '学校管理',
                    transistion: 'slide-fade'
                },
                children: [
                    {
                        path: 'department',
                        name: 'adminSchoolDepartment',
                        component: () => import('@/views/admin/school/depart/index.vue'),
                        meta: { title: '院系管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'major',
                        name: 'adminSchoolMajor',
                        component: () => import('@/views/admin/school/major/index.vue'),
                        meta: { title: '专业管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'class',
                        name: 'adminSchoolClass',
                        component: () => import('@/views/admin/school/class/index.vue'),
                        meta: { title: '课程管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'exam',
                        name: 'adminSchoolExam',
                        component: () => import('@/views/admin/school/exam/index.vue'),
                        meta: { title: '考试科目管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'plan',
                        name: 'adminSchoolPlan',
                        component: () => import('@/views/admin/school/plan/index.vue'),
                        meta: { title: '招生计划管理', transistion: 'slide-fade' }
                    }
                ]
            },
            {
                path: 'info',
                name: 'adminInfo',
                component: () => import('@/views/admin/info/index.vue'),
                meta: {
                    title: '公共管理',
                    transistion: 'slide-fade'
                },
                children: [
                    {
                        path: 'banner',
                        name: 'adminInfoBanner',
                        component: () => import('@/views/admin/info/banner/index.vue'),
                        meta: { title: '轮播管理', transistion: 'slide-fade' }
                    },
                    {
                        path: 'notice',
                        name: 'adminInfoNotice',
                        component: () => import('@/views/admin/info/notice/index.vue'),
                        meta: { title: '公告管理', transistion: 'slide-fade' }
                    }
                ]
            },
            {
                path: 'process',
                name: 'adminProcess',
                component: () => import('@/views/admin/process/index.vue'),
                meta: {
                    title: '流程管理',
                    transistion: 'slide-fade'
                },
                alias: 'workflow'
            },
            {
                path: 'operation',
                name: 'adminOperation',
                component: () => import('@/views/admin/operation/index.vue'),
                meta: {
                    title: '操作管理',
                    transistion: 'slide-fade'
                },
                children: [
                    {
                        path: 'log',
                        name: 'adminOperationLog',
                        component: () => import('@/views/admin/operation/log/index.vue'),
                        meta: { title: '操作日志', transistion: 'slide-fade' }
                    }
                ]
            }
        ]
    }
]

export default adminRoutes
