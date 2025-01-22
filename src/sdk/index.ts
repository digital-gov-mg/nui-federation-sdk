import { Uin } from './uin'
import { Log } from './log'
import { System } from './system'

export class NuiFederation {
  public uin: Uin
  public log: Log
  public system: System

  constructor(baseUrl: string, clientId: string, clientSecret: string) {
    this.uin = new Uin(baseUrl, clientId, clientSecret)
    this.log = new Log(baseUrl, clientId, clientSecret)
    this.system = new System(baseUrl, clientId, clientSecret)
  }
}
