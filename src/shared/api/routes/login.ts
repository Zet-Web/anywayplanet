import { AxiosPromise } from 'axios'
import { login } from 'shared/types/login'
import { api, endpoints_auth } from '..'

export const Login = (params: login): AxiosPromise => {
  return api.post(endpoints_auth.login, params)
}
