import { ApiResponse } from './types'
import service from './service'

export class CommonApi {
  public static async getTimestamp() {
    const response = await service.get<void, ApiResponse<string>>('/api')
    return response.result
  }
}
