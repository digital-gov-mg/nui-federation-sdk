import axios from 'axios'

export const fetchAccessToken = ({
  baseUrl,
  clientId,
  clientSecret,
}: {
  baseUrl: string
  clientId: string
  clientSecret: string
}) => {
  return axios.post(`${baseUrl}/sytems/token`, { clientId, clientSecret })
}
