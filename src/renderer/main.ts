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

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(pinia)
app.use(ElementPlus)
app.use(router)
app.mount('#app')

// 全局注入mitts
app.config.globalProperties.$mitts = mitts
