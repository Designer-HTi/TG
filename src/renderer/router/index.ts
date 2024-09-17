// 导入依赖
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

// 配置routes
const routes: Array<RouteRecordRaw> = [
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
    path: '/MonitoringPlan/:planCount',
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
  },
  {
    path: '/DataCenter',
    name: 'DataCenter',
    component: () => import('@/views/DataCenter/index.vue'),
    meta: {
      title: 'DataCenter',
      auth: false
    }
  }
]

// 配置router
const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})

// 导出路由
export default router
