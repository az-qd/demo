import axios, { type AxiosRequestConfig, type AxiosRequestHeaders, type AxiosResponse } from 'axios'
// 引入nprgress
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
// 配置新建一个 axios 实例
const service = axios.create({
  baseURL: '/app',
  timeout: 50000
})

// 添加请求拦截器
service.interceptors.request.use((config) => {
  // 给请求头添加'Content-Type': 'application/x-www-form-urlencoded'
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  nprogress.start()
  return config
})

// 添加响应拦截器
service.interceptors.response.use((response: any) => {
  nprogress.done()
  return response
})

export default service
