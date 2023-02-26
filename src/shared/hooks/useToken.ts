import { useEffect } from 'react'
import { useRouter } from 'next/router'

import api from 'shared/api'

import { cookies } from 'shared/utils/cookies'
import { handleError } from 'shared/utils/handleError'

export const useToken = () => {
  const { pathname } = useRouter()

  const token: string = cookies.get('access_token')

  useEffect(() => {
    if (pathname.includes('login')) return
    if (pathname.includes('marketplace')) return

    if (!token) {
      const error = new Error('Unauthorized')

      Object.defineProperty(error, 'response', {
        value: { status: 401 },
      })
      handleError(error)
    }
  }, [pathname, token])

  if (!token) return undefined

  api.defaults.headers.common['Authorization'] = 'Bearer ' + token

  return token
}
