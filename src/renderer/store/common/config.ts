import { defineStore } from 'pinia'
import NAMES from '../types'
import { ConfigData } from '../types/interface'

const useConfig = defineStore(NAMES.CONFIG, {
  state: () => {
    return {
      url: '',
      wsUrl: '',
      maxMsg: 0
    } as ConfigData
  },
  getters: {},
  actions: {
    setUrl(data: ConfigData) {
      this.$state = data
    }
  }
})

export default useConfig
