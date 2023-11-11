import { defineStore } from 'pinia'
import NAMES from '../types'
import { MonitoringData } from '../types/interface'

// 监测数据
const user = defineStore(NAMES.MONITORING_DATA, {
  state: () => {
    return [] as MonitoringData[]
  },
  getters: {
    getMonitoringData(state) {
      return state
    }
  },
  actions: {
    pushMonitoringData(data: MonitoringData) {
      this.$state.push(data)
    }
  }
})

export default user
