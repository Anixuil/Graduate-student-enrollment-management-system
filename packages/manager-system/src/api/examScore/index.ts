import { request } from '../request'
import { Res } from '../api'

export const getExamScore = (): Res<any[]> => {
    return request({
        url: '/examScore/getExamScore',
        method: 'get'
    })
}
