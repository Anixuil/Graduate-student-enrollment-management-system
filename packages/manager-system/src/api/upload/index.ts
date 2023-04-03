import request from '../request'
import { Res } from '../api'

export const importExcel = (data: FormData): Res<string> => {
    return request({
        url: '/publicfile/importExcel',
        method: 'post',
        data
    })
}
