import { Button, Navbar, Logo } from 'components'
import { FC } from 'react'
import Link from 'next/link'

import { MainMenu } from 'features/MainMenu/MainMenu'

import GreenPlayButton from '/public/assets/img/button/GreenPlayButton.svg'
import { LinkType } from 'shared/types'
import { mockFooterLinks } from 'shared/mocks/mockFooterLinks'

import s from './footer.module.scss'

interface FooterProps {
  links: LinkType[]
}

export const Footer: FC<FooterProps> = ({ links }) => {
  return (
    <footer className={s.footer}>
      <div className={s.footerTopBlock}>
        <Logo width={274} height={81} />
        <MainMenu className={s.mainMenu} menuItems={links} vairiant='footer' />
        <Navbar className={s.navbar} menuItems={links} />
        <div className={s.playBtn}>
          <Button label='PLAY' className={s.playBtn}>
            <GreenPlayButton />
          </Button>
        </div>
      </div>
      <div className={s.footerBottomBlock}>
        <div className={s.lineContainer}>
          <div className={s.line} />
        </div>
        <div className={s.content}>
          @2023 Mission: Any Way Planet LTD 979 Kings’s RD, Quarry Bay, Hong
          Kong
        </div>
        <div className={s.links}>
          {mockFooterLinks.map(item => (
            <Link href={item.link} key={item.label}>
              <a className={s.link} data-active={false} data-value={item.label}>
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
