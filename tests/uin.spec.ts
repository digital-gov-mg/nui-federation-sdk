import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

import { UIN } from '../src/sdk/uin'

describe('UIN', () => {
  let mock: MockAdapter
  let uinService: UIN

  const baseUrl = ''
  const clientId = ''
  const clientSecret = ''

  beforeEach(() => {
    mock = new MockAdapter(axios)
    uinService = new UIN(baseUrl, clientId, clientSecret)
  })

  afterEach(() => {
    mock.reset()
  })

  it('should create a new UIN if no existing UIN is found', async () => {
    const mockRequest = [
      {
        externalId: '123',
        firstname: 'John',
        lastname: 'Doe',
        dateOfBirth: '2000-01-01',
        birthCertificateId: 'BC123',
        motherName: 'Jane Doe',
      },
    ]

    const mockResponse = {
      code: 0,
      message: 'Success',
      data: { uin: '123456789' },
    }

    mock.onPut('/uins').reply(201, mockResponse)

    const response = await uinService.getOrCreateUIN(mockRequest)

    expect(response).toEqual(mockResponse)
    expect(mock.history.put[0].url).toBe('https://example.com/api/uins')
    expect(JSON.parse(mock.history.put[0].data)).toEqual(mockRequest)
  })

  it('should throw an error for a failed request', async () => {
    mock.onPut('/uins').reply(400, { message: 'Invalid request' })

    const mockRequest = [
      {
        externalId: '123',
        firstname: 'John',
        lastname: 'Doe',
        dateOfBirth: '2000-01-01',
        birthCertificateId: 'BC123',
        motherName: 'Jane Doe',
      },
    ]

    await expect(uinService.getOrCreateUIN(mockRequest)).rejects.toThrow(
      'Request failed with status code 400',
    )
  })
})
