import { defineStore } from 'pinia'
import NAMES from '../types'
import { MonitoringData } from '../types/interface'
import { GroupRes } from '@/apis/types'

// 监测数据
const useMonitoringData = defineStore(NAMES.MONITORING_DATA, {
  state: () => {
    return {
      monitoringData: [] as MonitoringData[],
      groupList: [
        {
          groupId: '',
          chatId: '',
          groupName: ''
        }
      ] as GroupRes[],
      keywordsList: [] as string[]
    }
  },
  getters: {},
  actions: {
    pushMonitoringData(data: MonitoringData) {
      this.$state.monitoringData.unshift(data)
      if (this.$state.monitoringData.length >= 50) {
        this.$state.monitoringData.length = 50
      }
    },
    setGroupList(data: GroupRes[]) {
      this.$state.groupList = data
    },
    setKeywordsList(data: string[]) {
      this.$state.keywordsList = data
    }
  }
})

export default useMonitoringData
