import request from '../request'
import { Res } from '../api'

//获取专业列表
export interface MajorAllParams {
    pageNum: number
    pageSize: number
}

export const getMajorList = (params: MajorAllParams): Res<any[]> => {
    return request({
        url: '/major/getAllMajor',
        method: 'get',
        params
    })
}

//添加专业
export interface AddParams {
    majorName: string
    departUuid: number
    majorIntro: string
}

export const addMajor = (data: AddParams): Res<string> => {
    return request({
        url: '/major/addMajor',
        method: 'post',
        data
    })
}

//修改专业
export interface UpdateParams {
    majorUuid: number
    majorName: string
    majorIntro: string
    departUuid: number
}

export const updateMajor = (data: UpdateParams): Res<string> => {
    return request({
        url: '/major/updateMajor',
        method: 'put',
        data
    })
}

//删除专业
export interface DeleteParams {
    majorUuid: number
}

export const deleteMajor = (data: DeleteParams): Res<string> => {
    return request({
        url: '/major/deleteMajor',
        method: 'delete',
        data
    })
}
