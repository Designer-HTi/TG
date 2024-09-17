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
  GroupListReq,
  DelKeywordsReq
} from './types'
import service from './service'

// 获取所有方案
export function queryAllPlan() {
  return service.get<void, ApiResponse<PlansRes[]>>('/plan')
}

// 创建方案
export function createPlan(params: CreatePlanReq) {
  return service.post<void, ApiResponse<null>>('/plan', params)
}

// 删除方案
export function delPlan(id: number) {
  return service.delete<void, ApiResponse<null>>(`/plan/${id}`)
}

// 修改方案
export function updatePlan(id: number, params: PlansRes) {
  return service.put<void, ApiResponse<null>>(`/plan/${id}`, params)
}

// 获取所有账号
export function queryAllUser() {
  return service.get<void, ApiResponse<UserRes[]>>('/user')
}

// 创建账号
export function createUser(params: CreateUserReq) {
  return service.post<void, ApiResponse<null>>('/user', params)
}

// 删除账号
export function deleteUser(id: number) {
  return service.delete<void, ApiResponse<null>>(`/user/${id}`)
}

// 创建群组
export function createChannel(params: CreateChannelReq) {
  return service.post<void, ApiResponse<null>>('/group', params)
}

// 获取所有群组
export function queryAllGroup(params: GroupListReq) {
  return service.post<void, ApiResponse<GroupRes[]>>('/group/list', params)
}

// 删除群组
export function deleteChannel(params: ChannelReq) {
  return service.delete<void, ApiResponse<null>>('/group', {
    data: params
  })
}

// 根据群组查关键词
export function queryKeywords(params: KeywordsReq) {
  return service.post<void, ApiResponse<KeywordsRes[]>>('/group/keyword/list', params)
}

// 新增关键词
export function addKeywords(params: AddKeywordsReq) {
  return service.post<void, ApiResponse<null>>('/group/keyword/add', params)
}

// 删除关键词
export function deleteKeywords(params: DelKeywordsReq[]) {
  return service.post<void, ApiResponse<null>>('/group/keyword/remove', params)
}

// // 监测方案绑定关键词
// export function updatePlan(params: UpdatePlanReq) {
//   return service.patch<void, ApiResponse<null>>('/api/plan', params)
// }

// // 更新关键词
// export function updateKeywords(params: AddKeywordsReq) {
//   return service.patch<void, ApiResponse<null>>('/api/keywords', params)
// }
