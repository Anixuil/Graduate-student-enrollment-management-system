import request from '../request'
import { Res } from '../api'

interface LoginParams {
    userName: string
    userPassword: string
}

interface registerParams {
    userName: string
    userPassword: string
    userPhone: string
    userAge: string
}

export const register = (data: registerParams): Res<string> => {
    return request({
        url: '/user/register',
        method: 'post',
        data
    })
}

export const login = (data: LoginParams): Res<string> => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
