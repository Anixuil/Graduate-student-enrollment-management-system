import request from '../request'
import { Res } from '../api'

interface LoginParams {
    userName: string
    userPassword: string
}

export const register = (data: {
    userName: string
    userPassword: string
    userPhone: string
    userAge: string
    userEmail: string
    userGender: string
    userRole: string
    majorUuid?: string
    departUuid?: string
    classUuid?: string
    entryDate?: string
    graduationDate?: string
    teacherId?: string
    teacherIntro?: string
    undergraduateSchool?: string
    userHeadimg?: string
    userAddress?: string
}): Res<string> => {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}

export const login = (data: LoginParams): Res<string> => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

export const getUserInfo = (): Res<string> => {
    return request({
        url: '/user/getUserInfo',
        method: 'get'
    })
}

//删除用户
export const deleteUser = (data: { userUuid: string }): Res<boolean> => {
    return request({
        url: '/user/deleteUser',
        method: 'delete',
        data
    })
}

//修改密码
export const updatePwd = (data: { oldPassword: string; newPassword: string }): Res<boolean> => {
    return request({
        url: '/user/updatePwd',
        method: 'put',
        data
    })
}
