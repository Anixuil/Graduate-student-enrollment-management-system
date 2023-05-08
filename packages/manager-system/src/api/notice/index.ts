import request from '../request'
import { Res } from '../api'

export const getNoticeInfoList = (params?: {
    pageNum?: number
    pageSize?: number
    noticeInfoTitle?: string
    noticeInfoIntro?: string
    noticeInfoType?: string
}): Res<any[]> => {
    return request({
        url: '/noticeInfo/getNoticeInfoList',
        method: 'get',
        params
    })
}

export const addNoticeInfo = (data: {
    noticeInfoTitle: string
    noticeInfoIntro: string
    noticeInfoContent: string
    noticeInfoAttachment: string
    noticeInfoType: string
}): Res<boolean> => {
    return request({
        url: '/noticeInfo/addNoticeInfo',
        method: 'post',
        data
    })
}

export const updateNoticeInfo = (data: {
    noticeInfoUuid: string
    noticeInfoTitle: string
    noticeInfoIntro: string
    noticeInfoContent: string
    noticeInfoAttachment: string
    noticeInfoType: string
}): Res<boolean> => {
    return request({
        url: '/noticeInfo/updateNoticeInfo',
        method: 'put',
        data
    })
}

export const deleteNoticeInfo = (data: { noticeInfoUuid: string }): Res<boolean> => {
    return request({
        url: '/noticeInfo/deleteNoticeInfo',
        method: 'delete',
        data
    })
}
