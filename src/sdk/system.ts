import { HTTP } from '../transports'
import { SystemConsumerRequest, SystemResponse } from '../types'

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
}
