import { UIN } from './uin'

export class NuiFederation {
  public uin: UIN

  constructor(baseUrl: string, clientId: string, clientSecret: string) {
    this.uin = new UIN(baseUrl, clientId, clientSecret)
  }
}
