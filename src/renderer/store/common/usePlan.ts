import { defineStore } from 'pinia'
import NAMES from '../types'
import { PlanFilters, PlansRes } from '@/apis/types'

// 监测数据
const usePlanStore = defineStore(NAMES.USE_PLAN, {
  state: () => {
    return {
      filters: {} as PlanFilters[],
      id: 0,
      planName: '',
      planType: '0'
    }
  },
  getters: {},
  actions: {
    setPlan(data: PlansRes) {
      this.$state = { ...data }
    }
  }
})

export default usePlanStore
