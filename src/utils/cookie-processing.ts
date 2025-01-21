import Cookie from 'js-cookie'

export const getCookie = ({ name }: { name: string }) => Cookie.get(name)

export const setCookie = ({ name, value }: { name: string; value: string }) => {
  Cookie.set(name, value, { expires: 7, secure: true })
}
