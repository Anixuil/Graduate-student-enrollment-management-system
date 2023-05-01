import request from '@/api/request'
import { Res } from '../api'

//群发邮件通知
export const sendEmail = (data: {
    emailTitle: string
    emailContent: string
    emailType: string
}): Res<any> => {
    return request({
        url: '/email/sendEmail',
        method: 'post',
        data
    })
}

//发送邮箱验证码
export const getEmailCode = (data: { email: string }): Res<any> => {
    return request({
        url: '/email/getEmailCode',
        method: 'post',
        data
    })
}
