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
export default service
