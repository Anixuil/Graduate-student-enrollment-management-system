import request from '../request'
import { Res } from '../api'

export const getTeacherList = (params: {
    pageNum?: number
    pageSize?: number
    userName?: string
    userEmail?: string
    userPhone?: string
    departUuid?: string
    classUuid?: string
    teacherId?: string
    teacherIntro?: string
}): Res<any> => {
    return request({
        url: '/user/getTeacherList',
        method: 'get',
        params
    })
}

export const updateTeacher = (data: {
    userUuid?: string
    userPhone?: string
    userName?: string
    userEmail?: string
    userGender?: string
    userAge?: string
    teacherId?: string
    teacherUuid?: string
    teacherIntro?: string
    departUuid?: string
    classUuid?: string
}): Res<boolean> => {
    return request({
        url: '/user/updateTeacher',
        method: 'put',
        data
    })
}
