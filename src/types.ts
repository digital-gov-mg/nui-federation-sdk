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
  data: any
}

export interface GenerateBatchUINResponse {
  code: number
  message: string
  data: {
    uins: string[]
  }
}
