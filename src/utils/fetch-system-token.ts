import { http } from '../transports'

export const fetchSytemToken = ({
  baseUrl,
  clientId,
  clientSecret,
}: {
  baseUrl: string
  clientId: string
  clientSecret: string
}) => {
  return http.default.post(`${baseUrl}/sytems/token`, {
    clientId,
    clientSecret,
  })
}
