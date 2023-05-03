import request from '../request'
import { Res } from '../api'

export const getIndexWheelList = (params: { pageNum?: number; pageSize?: number }): Res<any[]> => {
    return request({
        url: '/indexWheel/getIndexWheelList',
        method: 'get',
        params
    })
}

export const addIndexWheel = (data: {
    indexWheelTitle?: string
    indexWheelDesc?: string
    indexWheelImage: string
    indexWheelHref?: string
}): Res<boolean> => {
    return request({
        url: '/indexWheel/addIndexWheel',
        method: 'post',
        data
    })
}

export const updateIndexWheel = (data: {
    indexWheelUuid: number
    indexWheelTitle: string
    indexWheelDesc: string
    indexWheelImage: string
    indexWheelHref: string
}): Res<boolean> => {
    return request({
        url: '/indexWheel/updateIndexWheel',
        method: 'put',
        data
    })
}

export const deleteIndexWheel = (data: { indexWheelUuid: number }): Res<boolean> => {
    return request({
        url: '/indexWheel/deleteIndexWheel',
        method: 'delete',
        data
    })
}
