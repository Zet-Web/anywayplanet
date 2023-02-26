import Link from 'next/link'
import { FC, Fragment } from 'react'
import cn from 'classnames'

import { LinkType } from 'shared/types'

import s from './navbar.module.scss'

type NavbarProps = {
  menuItems: LinkType[]
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ menuItems, className }) => {
  return (
    <div className={cn(s.menuContainer, className)}>
      {menuItems?.map((item, index) => (
        <Fragment key={index}>
          <Link className={s.menuLink} key={item.label} href={item.link}>
            <a
              className={s.menuLink}
              data-active={false}
              data-value={item.label}
              target={item.label === 'lightpaper' ? '_blank' : ''}
            >
              {item.label}
            </a>
          </Link>
          {index !== menuItems.length - 1 && (
            <span className={s.menuLinkSeparator}>/</span>
          )}
        </Fragment>
      ))}
    </div>
  )
}
