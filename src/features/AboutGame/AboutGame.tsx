import { FC } from 'react'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import { Heading, Slider, ItemSliderWide } from '../../components'
import { sliderItemsMockWide } from '../../shared/mocks/sliderItems'

import s from './aboutGame.module.scss'

export const AboutGame: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.wrapper} id='about'>
      <div className={s.outline} />
      <div className={s.imgPlanet} />
      <div className={s.container}>
        <div className={s.firstClass}>
          <div className={s.lastClass} />
        </div>
        <h1 className={s.logoContainer}>ABOUT GAME</h1>
        <div className={s.logoSection}>
          <Heading
            whiteText={'DEVELOP YOUR BASE'}
            greenText={'ON UNKNOWN PLANET'}
            isGreenTop={false}
            textAlign='left'
          />
        </div>
        <div className={s.sliderWrapper}>
          <Slider
            variant={'wide'}
            slidesPerView={width <= 1440 ? 1.1 : 2}
            withNavigation={true}
            nextEl={'nextEl'}
            prevEl={'prevEl'}
            centeredSlides={width <= 1440 && width > 768}
          >
            {sliderItemsMockWide.map((item, idx) => (
              <ItemSliderWide key={idx} image={item.image} />
            ))}
          </Slider>
        </div>
        <div className={s.descriptionText}>
          <p>
            Your goal is to adapt to the aggressive conditions of an unknown
            planet. Storms blocking the sun, meteor showers, earthquakes - every
            day our hero has to fight for his life. But will all this stop you?
          </p>
        </div>
      </div>
    </div>
  )
}
