import { defineStore } from 'pinia'
import NAMES from '../types'

const useThemeColors = defineStore(NAMES.USE_STYLE, {
  state: () => {
    return {
      default: {
        '--el-bg': '#fff'
      }
    }
  },
  getters: {},
  actions: {}
})

export default useThemeColors
