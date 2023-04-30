import request from '../request'
import { Res } from '../api'

//获取招生计划
export const getEnroPlanList = (data: { pageNum: number; pageSize: number }): Res<any[]> => {
    return request({
        url: '/enro/getEnroPlanList',
        method: 'post',
        data
    })
}

//新增招生计划
export const addEnroPlan = (data: {
    majorUuid: number
    enroPlanNumber: number
    enroRealNumber: number
}): Res<string> => {
    return request({
        url: '/enro/addEnroPlan',
        method: 'post',
        data
    })
}

//修改招生计划
export const updateEnroPlan = (data: {
    enroPlanUuid: number
    majorUuid: number
    enroPlanNumber: number
    enroRealNumber: number
}): Res<string> => {
    return request({
        url: '/enro/updateEnroPlan',
        method: 'put',
        data
    })
}

//删除招生计划
export const deleteEnroPlan = (data: { enroPlanUuid: number }): Res<string> => {
    return request({
        url: '/enro/deleteEnroPlan',
        method: 'delete',
        data
    })
}
