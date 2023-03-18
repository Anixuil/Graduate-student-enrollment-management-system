import { defineStore } from 'pinia'

export const useUser = defineStore('user', {
    state: () => ({
        userName: '刘昕',
        userAge: 22,
        userSchool: '中南林业科技大学涉外学院',
        majorName: '计算机科学与技术',
        userPhone: '17607381041',
        userEmail: '1140040227@qq.com',
        userRole: 'student',
        teacherId: 'T0001',
        studentId: 'S0001',
        candidateId: 'C0001',
        departName: '信息工程学院',
        className: '计算机科学与技术'
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
                userRole: '用户角色',
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
                majorName: this.majorName,
                userSchool: this.userSchool
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
            // const res = await getUserInfo()
            // if (res.code === 200) {
            //     this.userName = res.data.userName
            //     this.userAge = res.data.userAge
            //     this.userSchool = res.data.userSchool
            //     this.majorName = res.data.majorName
            //     this.userPhone = res.data.userPhone
            //     this.userEmail = res.data.userEmail
            //     this.userRole = res.data.userRole
            //     this.teacherId = res.data.teacherId
            //     this.studentId = res.data.studentId
            //     this.candidateId = res.data.candidateId
            //     this.departName = res.data.departName
            //     this.className=res.data.className
            // }
        }
    }
})
