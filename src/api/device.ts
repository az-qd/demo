// 引入二次封装的axios
import service from '../utils/request'

// 获取所有设备列表
export const reqdevicealllist = () =>
  service({
    url: '',
    method: 'post',
    data: { act: 'list' }
  })

// 强制更新设备列表
export const reqdeviceupdatelist = () =>
  service({
    url: '',
    method: 'post',
    data: { act: 'rlist' }
  })
