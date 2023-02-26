import { FC, useEffect, useRef, useState } from 'react'
import Link from 'next/link'

import cn from 'classnames'

import GreenPlayBtn from '/public/assets/img/button/GreenPlayBtn.svg'
import { Burger, Button } from 'components'
import TelegramIcon from '../../../public/assets/icons/social/Telegram.svg'
import YoutubeIcon from '../../../public/assets/icons/social/Youtube.svg'
import TwitterIcon from '../../../public/assets/icons/social/Twitter.svg'
import { LinkType } from 'shared/types'

import s from './mainMenu.module.scss'

interface MainMenuProps {
  vairiant: 'header' | 'footer'
  menuItems: LinkType[]
  className?: string
  onClick?: () => void
}

export const MainMenu: FC<MainMenuProps> = ({
  menuItems,
  vairiant,
  className,
  onClick,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const onChange = () => {
    setIsOpen(!isOpen)
    onClick?.()
  }

  const onMenuItemClick = () => {
    onChange()
  }


  useEffect(() => {
    if (isOpen) {
      document.body.style.height = '100vh'
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.height = '100%'
      document.body.style.overflow = 'inherit'
    }
  }, [isOpen])
  return (
    <div className={cn(s.wrapper, className)}>
      {vairiant === 'header' && (
        <div>
          <Burger
            className={s.burger}
            onChange={onChange}
            isMenuOpen={isOpen}
          />
        </div>
      )}
      <div
        className={cn(s.menuContainer, {
          [s.header]: vairiant === 'header',
          [s.footer]: vairiant === 'footer',
          [s.isOpen]: isOpen,
          [s.isNotOpen]: !isOpen,
          [s.fixed]: vairiant === 'header',
        })}
      >
        <div className={s.button}>
          <Button label='PLAY' className={s.playBtn}>
            <GreenPlayBtn />
          </Button>
        </div>
        <div className={s.links}>
          {menuItems?.map(item => (
            <Link className={s.menuLink} href={item.link} key={item.label}
            >
              <a
                target="_blank"
                rel="noopener noreferrer"
                className={s.menuLink}
                data-active={false}
                data-value={item.label}
                onClick={onMenuItemClick}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>
        {vairiant == 'header' && (
          <div className={s.socialBlock}>
            <p className={s.title}>Our social networks</p>
            <Link href='#'>
              <a className={s.socialLink}>
                <TelegramIcon />
                Telegram
              </a>
            </Link>
            <Link href='#'>
              <a className={s.socialLinkRed}>
                <YoutubeIcon />
                Youtube
              </a>
            </Link>
            <Link href='#'>
              <a className={s.socialLink}>
                <TwitterIcon />
                Twitter
              </a>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
