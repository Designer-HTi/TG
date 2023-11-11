// 导入依赖
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 配置routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    children: []
  },
  {
    path: '/data',
    name: 'data',
    component: () => import('@/views/Home/indexdata.vue'),
    children: []
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/index.vue'),
    children: []
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('@/views/NotFound/index.vue'),
    meta: {
      title: '404',
      auth: false
    }
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  }
]

// 配置router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    console.log(to, from)
    return {
      left: 0,
      top: 0
    }
  }
})

// 配置钩子
router.beforeEach((to, from, next) => {
  // console.log(to, from)
  // ...
  next()
})

router.afterEach((to, from) => {
  // console.log(to, from)
  // window.scrollTo(0, 0);
})

// 导出路由
export default router
