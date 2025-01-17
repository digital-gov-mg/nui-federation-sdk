import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { fetchAccessToken } from './utils'

export abstract class Request {
  private client: AxiosInstance
  private accessToken: string | null = null
  private isAlreadyFetchingAccessToken = false

  constructor(
    private baseUrl: string,
    private apiKey: string,
    private clientId: string,
    private clientSecret: string,
  ) {
    if (!baseUrl || !apiKey || !clientId || !clientSecret) {
      throw new Error('Please provide all required configuration parameters')
    }

    if (!this.accessToken) {
      fetchAccessToken({
        baseUrl: this.baseUrl,
        clientId: this.clientId,
        clientSecret: this.clientSecret,
      })
        .then((res) => (this.accessToken = res.data))
        .catch((err) => console.error(err))
    }

    this.client = axios.create({
      baseURL: this.baseUrl,
      headers: {
        'Content-Type': 'application/json',
        'api-key': this.apiKey,
      },
    })
  }

  protected async request<T>(
    endpoint: string,
    options?: AxiosRequestConfig,
  ): Promise<T> {
    this.client.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers['Authorization'] = `Bearer ${this.accessToken}`
        }
        return config
      },
      (error) => Promise.reject(error),
    )

    this.client.interceptors.response.use(
      (response: AxiosResponse) => response,
      async (error) => {
        if (!error.response) return Promise.reject(error)

        const { config, response } = error
        const originalRequest = config

        if (
          (response.status === 401 || response.status === 403) &&
          !originalRequest._retry
        ) {
          originalRequest._retry = true

          if (!this.isAlreadyFetchingAccessToken) {
            this.isAlreadyFetchingAccessToken = true

            try {
              const newToken = await fetchAccessToken({
                baseUrl: this.baseUrl,
                clientId: this.clientId,
                clientSecret: this.clientSecret,
              })
              this.accessToken = newToken.data
            } catch (err) {
              return Promise.reject(err)
            } finally {
              this.isAlreadyFetchingAccessToken = false
            }
          }

          originalRequest.headers['Authorization'] =
            `Bearer ${this.accessToken}`
          return this.client(originalRequest)
        }

        return Promise.reject(error)
      },
    )

    try {
      const response = await this.client.request<T>({
        url: endpoint,
        ...options,
      })

      return response.data
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        'An error occurred while sending request'
      throw new Error(errorMessage)
    }
  }
}
