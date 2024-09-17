// ./src/types/interface.ts
// 用户信息
export interface MonitoringData {
  id: string
  chatId: string
  groupId: number
  groupName: string
  createTime: string
  keyWords: string[]
  userName: string
  userId: string
  message: string
}

export interface ConfigData {
  url: string
  wsUrl: string
  maxMsg: number
  chatUrl: string
}
