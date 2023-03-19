import axios from 'axios'
import { ElMessage } from 'element-plus'

//创建axios实例
const request = axios.create({
    baseURL: 'http://localhost:8080/anixuil', //请求地址
    timeout: 5000, //超时时间
    withCredentials: true //跨域请求时是否需要使用凭证
})

//请求拦截器
request.interceptors.request.use(
    config => {
        //在发送请求之前做些什么
        config.headers['token'] = localStorage.getItem('token') || ''
        return config
    },
    error => {
        //对请求错误做些什么
        return Promise.reject(error)
    }
)

//响应拦截器
request.interceptors.response.use(
    response => {
        //对响应数据做点什么
        const res = response.data
        if (res.code !== 200) {
            ElMessage.error(res.msg || 'Error')
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            return res
        }
    },
    error => {
        //对响应错误做点什么
        ElMessage.error(error.message)
        return Promise.reject(error)
    }
)

export default request
