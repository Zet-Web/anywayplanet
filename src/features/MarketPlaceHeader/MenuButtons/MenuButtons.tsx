import { FC } from 'react'
import { Setting } from '../../../../public/assets/icons/Setting'
import { Wallet } from '../../../../public/assets/icons/Wallet'
import { GoOut } from '../../../../public/assets/icons/GoOut'
import s from './menuButtons.module.scss'
import { cookies } from 'shared/utils/cookies'
import { useRouter } from 'next/router'
import { useAppDispatch } from 'shared/hooks/redux'
import { removeToken } from 'store/slices/auth'

export const MenuButtons: FC = () => {
  const { push } = useRouter()
  const dispatch = useAppDispatch()
  const handleLogout = () => {
    cookies.remove('access_token', { path: '/' })
    cookies.remove('refresh_token')
    dispatch(removeToken())
    push('/')
  }

  return (
    <div className={s.menu} onClick={() => push('/settings')}>
      <span className={s.btn}>
        <Setting />
      </span>
      <span className={s.btn}>
        <Wallet />
      </span>
      <span className={s.btn} onClick={handleLogout}>
        <GoOut />
      </span>
    </div>
  )
}
