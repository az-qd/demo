import { defineStore } from 'pinia'
/**
 * 用户信息
 * @methods setUserInfos 设置用户信息
 */
export const useUserInfoStore = defineStore('userInfo', {
  state: () => ({
    islogin: false
  })
})
