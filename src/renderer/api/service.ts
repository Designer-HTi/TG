import axios, { InternalAxiosRequestConfig } from 'axios'
import { ElMessage } from 'element-plus'

const service = axios.create({
  baseURL: 'http://192.168.10.70:6060/',
  timeout: 15000
})

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // config.headers['token'] = ''
    config.headers['Access-Control-Allow-Origin'] = '*'
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    const data = response.data
    if (data.code !== 200) {
      Promise.reject(ElMessage.error(data.msg))
    } else {
      return data
    }
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default service
