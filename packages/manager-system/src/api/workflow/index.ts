import request from '../request'
import { Res } from '../api'

export const getWorkFlowList = (params: {
    workFlowTitle?: string
    workFlowStatus?: number
    pageNum?: number
    pageSize?: number
    workFlowDesc?: string
    workFlowUuid?: string
}): Res<any> => {
    return request({
        url: '/workFlow/getWorkFlowList',
        method: 'get',
        params
    })
}

export const addWorkFlow = (data: {
    workFlowTitle: string
    workFlowDesc: string
    workFlowIndex: number
}): Res<boolean> => {
    return request({
        url: '/workFlow/addWorkFlow',
        method: 'post',
        data
    })
}

export const updateWorkFlow = (data: {
    workFlowUuid: string
    workFlowTitle: string
    workFlowDesc: string
    workFlowIndex: number
    workFlowStatus: number
}): Res<boolean> => {
    return request({
        url: '/workFlow/updateWorkFlow',
        method: 'put',
        data
    })
}

export const deleteWorkFlow = (data: { workFlowUuid: string }): Res<boolean> => {
    return request({
        url: '/workFlow/deleteWorkFlow',
        method: 'delete',
        data
    })
}
