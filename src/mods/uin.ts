import { Request } from '../core/request'
import {
  GetOrCreateUINRequest,
  UINResponse,
  GenerateBatchUINResponse,
} from '../lib/types'

export class UIN extends Request {
  async getOrCreateUIN(payload: GetOrCreateUINRequest[]): Promise<UINResponse> {
    return this.request<UINResponse>('/uins', {
      method: 'PUT',
      data: payload,
    })
  }

  async revokeUIN(uin: string): Promise<UINResponse> {
    return this.request<UINResponse>(`/uins/${uin}/revoke`, {
      method: 'DELETE',
    })
  }

  async generateBatchUIN(count: string): Promise<GenerateBatchUINResponse> {
    return this.request<GenerateBatchUINResponse>('/uins/batch', {
      method: 'POST',
      params: { count },
    })
  }
}
