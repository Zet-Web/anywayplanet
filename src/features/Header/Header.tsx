import { FC, useEffect, useState } from 'react'

import { MainMenu } from 'features/MainMenu/MainMenu'
import { Logo } from 'components/Logo/Logo'
import { Navbar } from 'components/Navbar/Navbar'

import { LinkType } from 'shared/types'

import s from './header.module.scss'
import cn from 'classnames'

interface HeaderProps {
  links: LinkType[]
}

export const Header: FC<HeaderProps> = ({ links }) => {
  const [state, setstate] = useState(false)
  const [width, setWidth] = useState(328)
  const [height, setHeight] = useState(96)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setWidth(window?.scrollY > 10 ? 200 : 328)
      setHeight(window?.scrollY > 10 ? 60 : 96)
    })
  }, [])
  return (
    <div className={cn(s.wrapper, { [s.active]: state })}>
      <Logo className={s.logo} width={width} height={height} />
      <Navbar className={s.navbar} menuItems={links} />
      <MainMenu
        className={s.mainMenu}
        vairiant='header'
        menuItems={links}
        onClick={() => setstate(prev => !prev)}
      />
    </div>
  )
}
