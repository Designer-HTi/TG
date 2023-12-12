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
          groupName: '',
          groupNickname: ''
        }
      ] as GroupRes[],
      keywordsList: [] as string[],
      maxMsg: 100
    }
  },
  getters: {},
  actions: {
    pushMonitoringData(data: MonitoringData) {
      this.$state.monitoringData.unshift(data)
      if (this.$state.monitoringData.length >= this.$state.maxMsg) {
        this.$state.monitoringData.length = this.$state.maxMsg
      }
    },
    setGroupList(data: GroupRes[]) {
      this.$state.groupList = data
    },
    setKeywordsList(data: string[]) {
      this.$state.keywordsList = data
    },
    setMaxMsg(n: number) {
      this.$state.maxMsg = n
    }
  }
})

export default useMonitoringData
