export interface ApiResponse<T> {
  code: 'success' | 'error'
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
  urls: string[]
}

export interface UserRes {
  chatId: string
}

export interface GroupRes {
  id: string
  chatId: string
  channelName: string
  createTime: string
}

export interface ChannelReq {
  chatId: string
  channelIds: string[]
}

export interface CreateUserReq {
  chatId: string
}

export interface KeywordsReq {
  chatId: string
  groupIds: string[]
}

export interface AddKeywordsReq {
  chatId: string
  keyword_data: {
    channelId: string
    channelName: string
    keywords: string[]
  }[]
}

export interface KeywordsRes {
  keywords: string[]
  channelId: string
  channelName: string
  create_time: string
}

export interface UpdatePlanReq {
  plan_id: string
  filters: any
}
