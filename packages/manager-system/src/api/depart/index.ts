import request from '../request'
import { Res } from '../api'

// 获取院系列表
interface DepartAllParams {
    pageNum: number
    pageSize: number
}

export const getDepartList = (params: DepartAllParams): Res<any[]> => {
    return request({
        url: '/depart/getAllDepart',
        method: 'get',
        params
    })
}

//新增院系
interface AddParams {
    departName: string
    departIntro: string
}
export const addDepart = (data: AddParams): Res<string> => {
    return request({
        url: '/depart/addDepart',
        method: 'post',
        data
    })
}

//修改院系
interface UpdateParams {
    departUuid: number
    departName: string
    departIntro: string
}
export const updateDepart = (data: UpdateParams): Res<string> => {
    return request({
        url: '/depart/updateDepart',
        method: 'put',
        data
    })
}

//删除院系
interface DeleteParams {
    departUuid: number
}
export const deleteDepart = (data: DeleteParams): Res<string> => {
    return request({
        url: '/depart/deleteDepart',
        method: 'delete',
        data
    })
}
