import {
  ApiResponse,
  CreateChannelReq,
  CreatePlanReq,
  PlansRes,
  ChannelReq,
  UserRes,
  GroupRes,
  CreateUserReq,
  KeywordsReq,
  AddKeywordsReq,
  KeywordsRes,
  UpdatePlanReq
} from './types'
import service from './service'

// 获取所有方案
export function queryAllPlan() {
  return service.get<void, ApiResponse<PlansRes[]>>('/api/plans')
}

// 创建方案
export function createPlan(params: CreatePlanReq) {
  return service.post<void, ApiResponse<null>>('/api/plan', params)
}

// 创建账户
export function createUser(params: CreateUserReq) {
  return service.post<void, ApiResponse<null>>('/api/user', params)
}

// 创建群组
export function createChannel(params: CreateChannelReq) {
  return service.post<void, ApiResponse<null>>('/api/channel', params)
}

// 获取所有账号
export function queryAllUser() {
  return service.get<void, ApiResponse<UserRes[]>>('/api/users')
}

// 获取所有群组
export function queryAllGroup(chatId: string) {
  return service.get<void, ApiResponse<GroupRes[]>>(`/api/${chatId}/channel`)
}

// 删除群组
export function deleteChannel(params: ChannelReq) {
  return service.delete<void, ApiResponse<null>>('/api/channel', {
    data: params
  })
}

// 删除账号
export function deleteUser(params: CreateUserReq) {
  return service.delete<void, ApiResponse<null>>('/api/user', {
    data: params
  })
}

// 根据群组查关键词
export function queryKeywords(params: KeywordsReq) {
  return service.post<void, ApiResponse<KeywordsRes[]>>('/api/channels/keywords', params)
}

// 新增关键词
export function addKeywords(params: AddKeywordsReq) {
  return service.post<void, ApiResponse<null>>('/api/keywords', params)
}

// 监测方案绑定关键词
export function updatePlan(params: UpdatePlanReq) {
  return service.patch<void, ApiResponse<null>>('/api/plan', params)
}

// 更新关键词
export function updateKeywords(params: AddKeywordsReq) {
  return service.patch<void, ApiResponse<null>>('/api/keywords', params)
}
