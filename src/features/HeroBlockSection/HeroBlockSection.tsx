import { FC, useEffect, useState } from 'react'
import Image from 'next/image'

import { GreenTitle, Heading, Button } from 'components'
import { Header } from 'features'

import GreenPlayButton from '/public/assets/img/button/GreenPlayButton.svg'
import img from '/public/assets/img/heroBlockImage.png'

import s from './heroBlockSection.module.scss'

import { mockHeaderMenuItems } from 'shared/mocks'
import cn from 'classnames'

export const HeroBlockSection: FC = () => {
  const [fixed, setFixed] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 10) {
        setFixed(true)
      } else {
        setFixed(false)
      }
    })
    return window.removeEventListener('scroll', () => {})
  }, [])
  return (
    <div className={cn(s.wrapper)}>
      <div className={cn(s.header, { [s.fixed]: fixed })}>
        <Header links={mockHeaderMenuItems} />
      </div>
      <div className={s.container}>
        <div className={s.image}>
          <Image src={img} />
        </div>
        <div className={s.box}>
          <div className={s.text}>
            <GreenTitle text='MISSION :' />
            <Heading
              greenText='ANY WAY PLANET'
              whiteText='Play to survive and earn real cash!'
              isGreenTop
            />
          </div>
          <div className={s.buttonWrapper}>
            <Button label='PLAY' className={s.playBtn}>
              <GreenPlayButton />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
