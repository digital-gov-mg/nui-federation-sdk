export interface GetOrCreateUINRequest {
  externalId: string
  firstname: string
  lastname: string
  dateOfBirth: string
  birthCertificateId: string
  motherName: string
}

export interface UINResponse {
  code: number
  message: string
  data: Record<string, unknown>
}

export interface GenerateBatchUINResponse {
  code: number
  message: string
  data: {
    uins: string[]
  }
}

export interface LogParameters {
  page: string
  limit: string
  type: 'CREATE' | 'UPDATE' | 'DELETE'
  systemId: string
}

export interface LogResponse {
  code: number
  message: string
  data: Record<string, unknown>
  totalCount: number
  page: number
  limit: number
}

export interface SystemConsumerRequest {
  name: string
  domain: string
}

export interface SystemResponse {
  code: number
  message: string
  data: Record<string, unknown>
}

export interface SystemGenerateTokenRequest {
  clientId: string
  clientSecret: string
}
