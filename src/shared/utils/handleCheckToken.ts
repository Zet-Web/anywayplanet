import { handleError } from 'shared/utils/handleError'
import { cookies } from 'shared/utils/cookies'
import { useRouter } from 'next/router'
import { refresh } from 'shared/api/routes/auth'
import { add } from 'date-fns'

export const useHandleCheckToken = async () => {
  const { push, reload } = useRouter()
  cookies.remove('access_token')
  const refreshToken: string = cookies.get('refresh_token')
  if (!refreshToken) push('/login')

  try {
    const { data } = await refresh(refreshToken)

    cookies.set('access_token', data.accessToken, {
      path: '/',
      expires: add(new Date(), { hours: 2 }),
    })

    cookies.set('refresh_token', data.refreshToken, {
      path: '/',
    })
    reload()
  } catch (error) {
    cookies.remove('access_token')
    cookies.remove('refresh_token')
    handleError(error)
    push('/login')
  }
}
