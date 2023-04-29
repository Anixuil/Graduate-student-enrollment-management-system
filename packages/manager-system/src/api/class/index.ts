import request from '../request'
import { Res } from '../api'

//获取课程列表
export interface ClassAllParams {
    pageNum: number
    pageSize: number
}

export const getClassList = (params: ClassAllParams): Res<any[]> => {
    return request({
        url: '/class/getClassList',
        method: 'get',
        params
    })
}

//添加课程
export interface AddParams {
    className: string
    classIntro: string
    majorUuid: number
}

export const addClass = (data: AddParams): Res<string> => {
    return request({
        url: '/class/addClass',
        method: 'post',
        data
    })
}

//修改课程
export interface UpdateParams {
    classUuid: number
    className: string
    classIntro: string
    majorUuid: number
}

export const updateClass = (data: UpdateParams): Res<string> => {
    return request({
        url: '/class/updateClass',
        method: 'put',
        data
    })
}

//删除课程
export interface DeleteParams {
    classUuid: number
}

export const deleteClass = (data: DeleteParams): Res<string> => {
    return request({
        url: '/class/deleteClass',
        method: 'delete',
        data
    })
}
