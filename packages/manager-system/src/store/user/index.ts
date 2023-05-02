import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'

export const useUser = defineStore('user', {
    state: () => ({
        userName: '',
        userAge: null,
        userSchool: '',
        majorName: '',
        userPhone: '',
        userEmail: '',
        userRole: '',
        teacherId: '',
        studentId: '',
        candidateId: '',
        departName: '',
        className: '',
        createDate: '',
        updateDate: ''
    }),
    getters: {
        //获取信息字段名
        getUserLabel(): object {
            return {
                userName: '姓名',
                userAge: '年龄',
                userSchool: '本科院校',
                majorName: '报考专业',
                userPhone: '联系方式',
                userEmail: '电子邮箱',
                teacherId: '教师编号',
                studentId: '学生编号',
                candidateId: '考生编号',
                userRole: '身份',
                departName: '所属院系',
                className: '所教课程'
            }
        },
        //获取用户基本信息
        getUserInfo(): object {
            return {
                userName: this.userName,
                userAge: this.userAge,
                userPhone: this.userPhone,
                userEmail: this.userEmail,
                userRole: this.userRole
            }
        },
        //获取考生信息
        getCandidateInfo(): object {
            return {
                candidateId: this.candidateId,
                userSchool: this.userSchool,
                majorName: this.majorName
            }
        },
        //获取学生信息
        getStudentInfo(): object {
            return {
                studentId: this.studentId,
                majorName: this.majorName,
                departName: this.departName
            }
        },
        //获取教师信息字段
        getTeacherInfo(): object {
            return {
                teacherId: this.teacherId,
                departName: this.departName,
                className: this.className
            }
        }
    },
    actions: {
        //从后端获取用户信息
        async getUserInfoFromServer(): Promise<void> {
            try {
                const res: any = await getUserInfo()
                Object.assign(this, res.data.userInfo)
                sessionStorage.setItem('userInfo', JSON.stringify(res.data.userInfo))
            } catch (err) {
                console.log(err)
            }
        },
        //初始化用户信息
        async initUserInfo(): Promise<boolean> {
            if (sessionStorage.getItem('userInfo') === null) {
                if (localStorage.getItem('token')) {
                    await this.getUserInfoFromServer()
                } else {
                    // return this.$router.push('/login')
                    location.href = '/login'
                    return false
                }
            }
            //从sessionStorage中获取用户信息
            const userInfo = sessionStorage.getItem('userInfo')
            if (userInfo) {
                Object.assign(this, JSON.parse(userInfo))
            }
            return true
        },
        //退出登录
        logout(): boolean {
            sessionStorage.clear()
            localStorage.clear()
            return true
        }
    }
})
