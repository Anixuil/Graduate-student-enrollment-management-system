import request from '../request'
import { Res } from '../api'

export const getLogList = (params?: {
    pageNum?: number
    pageSize?: number
    logTitle?: string
    logContent?: string
    logUuid?: string
    logStatus?: string
    userUuid?: string
}): Res<any[]> => {
    return request({
        url: '/log/getLogList',
        method: 'get',
        params
    })
}

export const addLog = (data: {
    logTitle: string
    logContent: string
    logStatus: string
}): Res<boolean> => {
    return request({
        url: '/log/addLog',
        method: 'post',
        data
    })
}
