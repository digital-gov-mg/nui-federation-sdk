import { HTTP } from '../transports'
import {
  SystemConsumerRequest,
  SystemResponse,
  SystemGenerateTokenRequest,
} from '../types'

export class System extends HTTP {
  async createConsumer(
    payload: SystemConsumerRequest,
  ): Promise<SystemResponse> {
    return this.request<SystemResponse>({
      url: '/systems',
      options: {
        method: 'POST',
        data: payload,
      },
    })
  }

  async generateToken(
    payload: SystemGenerateTokenRequest,
  ): Promise<SystemResponse> {
    return this.request<SystemResponse>({
      url: '/systems/token',
      options: {
        method: 'POST',
        data: payload,
      },
    })
  }
}
