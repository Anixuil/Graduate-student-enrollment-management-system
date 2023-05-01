import request from '../request'
import { Res } from '../api'

//获取考试科目列表
export const getExamClassList = (data: {
    pageNum: number
    pageSize: number
    majorUuid?: string
    examClassName?: string
}): Res<any[]> => {
    return request({
        url: '/examClass/getExamClassList',
        method: 'post',
        data
    })
}

//添加考试科目
export const addExamClass = (data: {
    examClassName: string
    majorUuid: string
    examClassDesc: string
    examType: string
}): Res<string> => {
    return request({
        url: '/examClass/addExamClass',
        method: 'post',
        data
    })
}

//修改考试科目
export const updateExamClass = (data: {
    examClassUuid: string
    examClassName: string
    majorUuid: string
    examClassDesc: string
    examType: string
}): Res<string> => {
    return request({
        url: '/examClass/updateExamClass',
        method: 'put',
        data
    })
}

//删除考试科目
export const deleteExamClass = (data: { examClassUuid: string }): Res<string> => {
    return request({
        url: '/examClass/deleteExamClass',
        method: 'delete',
        data
    })
}
