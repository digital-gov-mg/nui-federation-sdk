import { UIN } from './uin'
import { Log } from './log'

export class NuiFederation {
  public uin: UIN
  public log: Log

  constructor(baseUrl: string, clientId: string, clientSecret: string) {
    this.uin = new UIN(baseUrl, clientId, clientSecret)
    this.log = new Log(baseUrl, clientId, clientSecret)
  }
}
