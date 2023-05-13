import axios from 'axios'
import { ElMessage } from 'element-plus'
import router from '@/router'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import nprogress from 'nprogress' //进度条
import 'nprogress/nprogress.css' //进度条样式
import { Res } from './api'

//创建axios实例
export const request = axios.create({
    baseURL: 'http://localhost:8080/anixuil', //请求地址
    timeout: 36000, //超时时间
    withCredentials: true //跨域请求时是否需要使用凭证
})

//请求拦截器
request.interceptors.request.use(
    config => {
        nprogress.start()
        //如果请求的地址是登录，就不需要携带token
        const arr: string[] = ['/user/login', '/user/register']
        const index = arr.findIndex(item => {
            return item === config.url
        })
        if (index === -1) {
            config.headers['token'] = localStorage.getItem('token') || ''
        }
        //在发送请求之前做些什么
        return config
    },
    error => {
        //对请求错误做些什么
        return Promise.reject(error)
    }
)

//响应拦截器
const urlNoLog = ['/user/login', '/user/register', '/log/addLog']
request.interceptors.response.use(
    async response => {
        nprogress.done()
        //对响应数据做点什么
        const res = response.data
        //存日志
        if (response.config.method != 'get' && !urlNoLog.includes(response.config.url as string)) {
            const logContent = {
                url: `${response.config.baseURL}${response.config.url}` || '',
                method: response.config.method,
                content: response.data.data || ''
            }
            await addLog({
                logTitle: response.data.msg,
                logContent: JSON.stringify(logContent),
                logStatus: response.data.code
            })
        }
        if (res.code !== 200) {
            console.log(res)
            ElMessage.error(res.msg || 'Error')
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        nprogress.done()
        //对响应错误做点什么
        ElMessage.error(error.message)
        if (error.response.status === 403) {
            localStorage.removeItem('token')
            router.push({ name: 'login' })
        }
        return Promise.reject(error)
    }
)

//存日志
const addLog = (data: {
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

export default request
