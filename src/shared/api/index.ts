import Axios from 'axios'

export * from './endpoints'

export const BASE_DOMAIN = 'https://api.anywayplanet.com'

export const api = Axios.create({
  baseURL: `${BASE_DOMAIN}`,
  headers: {
    'Content-Type': 'application/json',
  },

  withCredentials: false,
})

export default api
