// 引入二次封装的axios
import service from '../utils/request'

// 获取token
export const reqtoken = () =>
  service({
    url: '',
    method: 'post',
    data: { act: 'gtk' }
  })

// 登录
export const reqlogin = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'login' },
    params
  })

// 是否登录
export const reqislogin = () =>
  service({
    url: '',
    method: 'post',
    data: { act: 'islogin' }
  })

// 退出登录
export const reqlogout = () =>
  service({
    url: '',
    method: 'post',
    data: { act: 'logout' }
  })

// 修改密码
export const requpdatePassword = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'cgps' },
    params
  })
