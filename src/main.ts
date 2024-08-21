import { createApp } from 'vue'
import App from './App.vue'
// 引入router
import router from './router'

// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入pinia
import pinia from './stores/index'

// 引入登录鉴权
import './permission'
// 引入全局样式
import './style/main.css'
const app = createApp(App)
app.use(router).use(pinia).use(ElementPlus).mount('#app')
