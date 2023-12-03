import '@/assets/icon/iconfont/iconfont.css'
import '@/common/styles/index.less'
import 'element-plus/dist/index.css'
import 'uno.css'
import router from '@/router'
import pinia from '@/store'
import mitts from '@/utils/mitts'
import ElementPlus from 'element-plus'
import { createApp } from 'vue'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.use(pinia)
app.mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// 全局注入mitts
app.config.globalProperties.$mitts = mitts
