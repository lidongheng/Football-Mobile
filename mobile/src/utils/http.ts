import axios, { AxiosResponse, AxiosRequestConfig } from 'axios'
import router from '@/router'

const service = axios.create({
  timeout: 10000
})

service.interceptors.request.use((config: AxiosRequestConfig) => {
  if (localStorage.Token) {
    config.headers.Authorization = localStorage.Token
  }
  return config
}, (err: any) => {
  Promise.reject(err)
})

service.interceptors.response.use((response: AxiosResponse) => {
  return response
}, (err: any) => {
  let errMsg = ''
  if (err && err.response.status) {
    switch (err.response.status) {
      case 401:
        errMsg = '登录状态失效，请重新登录'
        localStorage.removeItem('Token')
        router.push('/login')
        break
      case 403:
        errMsg = '拒绝访问'
        break
      case 408:
        errMsg = '请求超时'
        break
      case 500:
        errMsg = '服务器内部错误'
        break
      case 501:
        errMsg = '服务未实现'
        break
      case 502:
        errMsg = '网关错误'
        break
      case 503:
        errMsg = '服务不可用'
        break
      case 504:
        errMsg = '网关超时'
        break
      case 505:
        errMsg = 'HTTP版本不受支持'
        break
      default:
        errMsg = err.response.data.msg
        break
    }
  } else {
    errMsg = err
  }
  console.log(errMsg)
  return Promise.reject(errMsg)
})

export default service
