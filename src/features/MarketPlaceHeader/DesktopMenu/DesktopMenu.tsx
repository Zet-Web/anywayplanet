import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Button, Navbar } from 'components'
import { MenuButtons } from '../MenuButtons/MenuButtons'
import { MenuLang } from '../MenuLang/MenuLang'
import SmallGreen from '/public/assets/img/button/SmallGreen.svg'
import SmallYellow from '/public/assets/img/button/SmallYellow.svg'

import s from './desktopMenu.module.scss'
import cn from 'classnames'

import { LinkType } from 'shared/types'
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { useToken } from 'shared/hooks/useToken'
import { setToken } from 'store/slices/auth'
import api from 'shared/api'

interface DesktopMenuProps {
  menuItems: LinkType[]
  className?: string
}

export const DesktopMenu: FC<DesktopMenuProps> = ({ menuItems, className }) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.auth.token)
  const accessToken = useToken()

  const goToSignUpForm = () => {
    router.push('/register')
  }

  console.log(api.defaults.headers.common['Authorization'])

  const goToLoginForm = () => {
    router.push('/login')
  }

  useEffect(() => {
    if (!accessToken) return
    dispatch(setToken(accessToken))
  }, [accessToken])

  return (
    <>
      <div className={cn(s.desktopMenu, className)}>
        {token ? (
          <>
            <Navbar menuItems={menuItems} />
            <MenuButtons />
            <div>
              <Button label='PLAY GAME'>
                <SmallGreen />
              </Button>
            </div>
            <MenuLang />
          </>
        ) : (
          <>
            <div className={s.flex}>
              <Link href='#' className={s.menuLink}>
                <a
                  className={s.menuLink}
                  data-active={true}
                  data-value='BUY NFT'
                >
                  BUY NFT
                </a>
              </Link>
            </div>
            <div className={s.buttons}>
              <Button label='LOG IN' onClick={goToLoginForm}>
                <SmallYellow />
              </Button>
              <Button label='SIGN UP' onClick={goToSignUpForm}>
                <SmallGreen />
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  )
}
