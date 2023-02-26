import { AxiosResponse } from 'axios'
import api, { endpoints_auth } from 'shared/api'
import { ContactLoginForm, ContactRecoveryForm, ContactRegisterForm } from 'shared/types/contact'

export type AxiosApiResponse = Promise<
  AxiosResponse<{ accessToken: string; refreshToken: string; errors: any }>
>

export const authorize = (form: ContactLoginForm): AxiosApiResponse => {
  return api.post(endpoints_auth.login, form)
}

export const register = (form: ContactRegisterForm) => {
  return api.post(endpoints_auth.register, form)
}

export const refresh = (token: string) => {
  return api.post(endpoints_auth.refresh_token, {token: token})
}

export const recovery = (form: ContactRecoveryForm) => {
  return api.post(endpoints_auth.restore, form)
}
