import { FC, useEffect, useState } from 'react'
import { Logo } from 'components'
import { DesktopMenu } from './DesktopMenu/DesktopMenu'
import { MobileMenu } from './MobileMenu/MobileMenu'
import { LinkType } from 'shared/types'

import s from './marketPlaceHeader.module.scss'
import cn from 'classnames'

interface HeaderProps {
  links: LinkType[]
}

export const MarketPlaceHeader: FC<HeaderProps> = ({ links }) => {
  const [state, setstate] = useState(false)

  return (
    <header className={cn(s.header, { [s.active]: state })}>
      <Logo width={'219'} height={'64'} className={s.logo} />
      <DesktopMenu menuItems={links} />
      <MobileMenu
        menuItems={links}
        vairiant={'header'}
        onClick={() => setstate(prev => !prev)}
      />
    </header>
  )
}
