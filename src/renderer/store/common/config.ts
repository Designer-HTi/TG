import { defineStore } from 'pinia'
import NAMES from '../types'

const useConfig = defineStore(NAMES.CONFIG, {
  state: () => {
    return {
      url: ''
    }
  },
  getters: {},
  actions: {
    setUrl(data: string) {
      this.$state.url = data
    }
  }
})

export default useConfig
