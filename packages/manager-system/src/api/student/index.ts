import request from '../request'
import { Res } from '../api'

export const getStudentList = (params: {
    pageNum?: number
    pageSize?: number
    userName?: string
    userEmail?: string
    userPhone?: string
    studentId?: string
    majorUuid?: string
    undergraduateSchool?: string
}): Res<any> => {
    return request({
        url: '/user/getStudentList',
        method: 'get',
        params
    })
}

export const updateStudent = (data: {
    studentUuid?: string
    userPhone?: string
    userName?: string
    majorUuid?: string
    userUuid?: string
    userEmail?: string
    userGender?: string
    userRole?: string
    studentId?: string
    entryDate?: string
    graduationDate?: string
    userAge?: string
    undergraduateSchool?: string
    userHeadimg?: string
    userAddress?: string
}): Res<boolean> => {
    return request({
        url: '/user/updateStudent',
        method: 'put',
        data
    })
}
