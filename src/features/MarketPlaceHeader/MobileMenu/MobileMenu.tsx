import { FC, useEffect, useState } from 'react'
import Link from 'next/link'
import { Burger } from 'components/Burger/Burger'
import { Button } from 'components/Button/Button'
import GreenPlayBtn from '/public/assets/img/button/GreenPlayBtn.svg'
import LoginMobileBtn from '/public/assets/img/button/LoginMobileBtn.svg'

import { Setting } from '../../../../public/assets/icons/Setting'
import { Wallet } from '../../../../public/assets/icons/Wallet'
import { GoOut } from '../../../../public/assets/icons/GoOut'
import { LinkType } from 'shared/types'

import s from './mobileMenu.module.scss'
import cn from 'classnames'
import { MenuLang } from '../MenuLang/MenuLang'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { useRouter } from 'next/router'
import { cookies } from 'shared/utils/cookies'
import { removeToken } from 'store/slices/auth'

interface MobileMenu {
  vairiant: 'header' | 'footer'
  menuItems: LinkType[]
  className?: string
  onClick?: () => void
}

export const MobileMenu: FC<MobileMenu> = ({
  menuItems,
  vairiant,
  className,
  onClick,
}) => {
  const [active, setActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const token = useAppSelector(state => state.auth.token)
  const router = useRouter()
  const dispatch = useAppDispatch()

  const onChange = () => {
    setIsOpen(prev => !prev)
    // @ts-ignore
    onClick()
  }

  const handleLogout = () => {
    cookies.remove('access_token', {path: '/'})
    cookies.remove('refresh_token')
    dispatch(removeToken())
    router.push('/')
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = '100%'
      document.body.style.overflow = 'visible'
    }
  }, [isOpen])

  return (
    <div className={cn(s.wrapper, className)}>
      <div>
        <Burger className={s.burger} onChange={onChange} isMenuOpen={isOpen} />
        <MenuLang className={s.menuLang} />
      </div>

      <div
        className={cn(s.menuContainer, {
          [s.header]: vairiant === 'header',
          [s.fixed]: vairiant === 'header',
          [s.isOpen]: isOpen,
        })}
      >
        {!token ? (
          <div className={s.buttons}>
            <div className={s.login}>
              <Button label='LOG IN' onClick={() => router.push('/login')}>
                <LoginMobileBtn />
              </Button>
            </div>
            <Button label='SIGN UP' onClick={() => router.push('/register')} >
              <GreenPlayBtn />
            </Button>
            <button className={s.buyNft}>
              <span>BUY NFT</span>
            </button>
          </div>
        ) : (
          <>
            <div className={s.button}>
              <Button label='PLAY GAME' className={s.playBtn}>
                <GreenPlayBtn />
              </Button>
            </div>
            <div className={s.links}>
              {menuItems?.map(item => (
                <Link className={s.menuLink} href={item.link} key={item.label}>
                  <a
                    className={s.menuLink}
                    data-active={false}
                    data-value={item.label}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                </Link>
              ))}
            </div>
            <div className={s.additionally}>
              <p className={s.title}>additionally</p>
              <button className={s.btn}>
                <Setting green />
                Settings
              </button>
              <button className={s.btn}>
                <Wallet green />
                Connect Wallet
              </button>
              <button className={s.btn} onClick={handleLogout}>
                <GoOut green />
                Logout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
