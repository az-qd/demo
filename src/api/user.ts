// 引入二次封装的axios
import service from '../utils/request'

// 获取所有列表
export const requserlist = () =>
  service({
    url: '',
    method: 'post',
    data: { act: 'userlist' }
  })

// 获取用户详情
export const requserdetail = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'userinfo' },
    params
  })
// 查看所有设备
export const reqdevicelist = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'userauth' },
    params
  })

// 新增用户
export const reqadduser = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'upinfo' },
    params
  })
// 删除用户
export const reqdeluser = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'upinfo' },
    params
  })

// 重置密码
export const reqresetpwd = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'ummr' },
    params
  })

// 修改用户资料
export const requpuser = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'upinfo' },
    params
  })

// 获取用户设备列表
export const requserdevice = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'drvlst' },
    params
  })

// 给用户添加设备
export const reqadddevice = (params: any) =>
  service<any, any>({
    url: '',
    method: 'post',
    data: { act: 'adddrv' },
    params
  })

// 给用户删除设备
export const reqdeldevice = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'deldrv' },
    params
  })

// 搜索设备
export const reqsearchdevice = (params: any) =>
  service({
    url: '',
    method: 'post',
    data: { act: 'drvlst' },
    params
  })
