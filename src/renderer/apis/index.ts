import {
  ApiResponse,
  CreateChannelReq,
  CreatePlanReq,
  PlansRes,
  ChannelReq,
  UserRes,
  GroupRes
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

// 创建账号or群组
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

// 删除账号或群组
export function deleteChannel(params: ChannelReq) {
  return service.delete<void, ApiResponse<null>>('/api/channel', {
    params: params
  })
}
