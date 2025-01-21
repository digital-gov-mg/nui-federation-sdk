import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export interface HTTPRequestParameters {
  url: string
  options?: AxiosRequestConfig
}

export interface HTTPModule {
  request<T>(params: HTTPRequestParameters): Promise<T>
}

export {
  AxiosInstance as HTTPInstance,
  AxiosRequestConfig as HTTPRequestConfig,
  AxiosResponse as HTTPResponse,
}
