import router from '@/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

// 路由加载前
router.beforeEach((to, from, next) => {
  // 获取是否登录的标志
  const islogin = sessionStorage.getItem('islogin')
  // 显示进度条
  NProgress.start()
  // 如果已经登录过了,再去登录页面,直接跳转首页
  if (to.path === '/' && islogin == 'true') {
    // 跳转首页
    next('/home')
  }
  // 如果没有登录,并且访问的不是登录页面,直接跳转登录页面
  if (to.path != '/' && islogin == null) {
    // 跳转登录页面
    next('/')
  }
  next()
})

// 路由加载后
router.afterEach(() => {
  // 关闭进度条
  NProgress.done()
})
