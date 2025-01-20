import { UIN } from './mods/uin'

export default class NuiFederation {
  public uin: UIN

  constructor(
    baseUrl: string,
    apiKey: string,
    clientId: string,
    clientSecret: string,
  ) {
    this.uin = new UIN(baseUrl, apiKey, clientId, clientSecret)
  }
}
