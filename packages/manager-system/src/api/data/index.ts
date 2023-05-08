import request from '../request'
import { Res } from '../api'

export const getUserCount = (): Res<any> => {
    return request({
        url: '/data/getUserCount',
        method: 'get'
    })
}

export const getDepartCount = (): Res<any> => {
    return request({
        url: '/data/getDepartCount',
        method: 'get'
    })
}
