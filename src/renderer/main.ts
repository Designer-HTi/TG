import { createApp } from 'vue'
import App from './App.vue'
import '@/common/styles/index.less'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import pinia from '@/store'
import mitts from '@/utils/mitts'
import 'uno.css'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

// 全局注入mitts
app.config.globalProperties.$mitts = mitts
