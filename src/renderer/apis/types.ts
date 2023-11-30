export interface ApiResponse<T> {
  code: string
  data: T
  msg: string
}

export interface PlansRes {
  create_time: string
  filters: string
  id: string
  planName: string
  planType: string
}

export interface CreatePlanReq {
  planName: string
  planType: '1' | '2' | '3'
}

export interface CreateChannelReq {
  chatId: string
  urls?: string[]
}

export interface UserRes {
  chatId: string
}

export interface GroupRes {
  chatId: string
  channelName?: string
  channelId?: string
}

export interface ChannelReq {
  chatId?: string
  channelId?: string[]
}
