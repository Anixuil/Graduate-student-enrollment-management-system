import { defineStore } from 'pinia'
import { getUserInfo } from '@/api/user'

export const useUser = defineStore('user', {
    state: () => ({
        userName: '',
        userAge: null,
        majorName: '',
        majorUuid: '',
        userPhone: '',
        userEmail: '',
        userRole: '',
        teacherId: '',
        studentId: '',
        candidateId: '',
        departName: '',
        className: '',
        createDate: '',
        updateDate: '',
        undergraduateSchool: '',
        entryDate: '',
        graduationDate: '',
        teacherIntro: '',
        candidateStatus: '',
        firstScore: null,
        secondScore: null,
        thirdScore: null,
        userGender: '',
        userUuid: '',
        candidateUuid: '',
        informationStatus: '',
        teacherUuid: '',
        studentUuid: '',
        userHeadimg: '',
        userAddress: '',
        examDate: ''
    }),
    getters: {
        //获取信息字段名
        getUserLabel(): object {
            return {
                userName: '姓名',
                userAge: '年龄',
                majorName: '报考专业',
                userPhone: '联系方式',
                userEmail: '电子邮箱',
                teacherId: '工号',
                studentId: '学号',
                candidateId: '考号',
                userRole: '身份',
                departName: '所属院系',
                className: '所教课程',
                undergraduateSchool: '本科院校',
                entryDate: '入学时间',
                graduationDate: '毕业时间',
                teacherIntro: '教师简介',
                candidateStatus: '考生状态',
                firstScore: '初试成绩',
                secondScore: '复试成绩',
                thirdScore: '调剂成绩',
                informationStatus: '信息状态',
                userGender: '性别',
                userHeadimg: '照片',
                userAddress: '地址',
                examDate: '考试日期',
                userUuid: '用户UUID',
                candidateUuid: '考生UUID',
                teacherUuid: '教师UUID'
            }
        },
        //获取用户基本信息
        getUserInfo(): object {
            return {
                userUuid: this.userUuid,
                userName: this.userName,
                userAge: this.userAge,
                userPhone: this.userPhone,
                userEmail: this.userEmail,
                userGender: this.userGender,
                userRole: this.userRole,
                undergraduateSchool: this.undergraduateSchool,
                userAddress: this.userAddress,
                userHeadimg: this.userHeadimg
            }
        },
        //获取考生信息
        getCandidateInfo(): object {
            return {
                candidateUuid: this.candidateUuid,
                candidateId: this.candidateId,
                majorUuid: this.majorUuid,
                majorName: this.majorName,
                candidateStatus: this.candidateStatus,
                firstScore: this.firstScore,
                secondScore: this.secondScore,
                thirdScore: this.thirdScore,
                informationStatus: this.informationStatus,
                examDate: this.examDate
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

const typeArr = ['初试', '复试', '调剂', '录取', '未录取']
const roleArr = [
    { label: '考生', value: 'candidate' },
    { label: '学生', value: 'student' },
    { label: '教师', value: 'teacher' },
    { label: '管理员', value: 'admin' }
]
