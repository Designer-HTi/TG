// 导入依赖
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// 配置routes
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'MonitoringPlan',
    component: () => import('@/views/MonitoringPlan/index.vue'),
    children: []
  },
  {
    path: '/tg',
    name: 'tg',
    component: () => import('@/views/Tg/index.vue'),
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
  },
  {
    path: '/MonitoringPlan',
    name: 'MonitoringPlan',
    component: () => import('@/views/MonitoringPlan/index.vue'),
    meta: {
      title: 'MonitoringPlan',
      auth: false
    }
  },
  {
    path: '/TgConfiguration',
    name: 'TgConfiguration',
    component: () => import('@/views/TgConfiguration/index.vue'),
    meta: {
      title: 'TgConfiguration',
      auth: false
    }
  }
]

// 配置router
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from) {
    return {
      left: 0,
      top: 0
    }
  }
})

// 导出路由
export default router
