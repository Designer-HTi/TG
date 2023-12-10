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
          groupId: '1',
          chatId: '1',
          groupName: '1'
        },
        {
          id: '2',
          chatId: '2',
          channelName: '2'
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
