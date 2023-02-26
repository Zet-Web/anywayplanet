import { FC } from 'react'
import Image from 'next/image'

import { Heading } from 'components/Heading/Heading'
import Diamond from '../../../public/assets/img/diamond.svg'
import diamond_mobile from '../../../public/assets/img/Diamond_Mobile.png'
import Arrows from '../../../public/assets/img/arrows.svg'
import ArrowsResponsive from '../../../public/assets/img/arrowsresponsive.svg'
import { ItemSlider, Slider } from 'components'
import { sliderItemsDefault } from 'shared/mocks/sliderItems'

import s from './sectionroadmap.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

export const SectionRoadmap: FC = () => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.wrapper} id='roadmap'>
      <div className={s.outline} />
      <div className={s.container}>
        <div className={s.lineContainer}>
          <div className={s.line} />
        </div>
        <h1 className={s.header}>roadmap</h1>
        <div className={s.aboutContainer}>
          <Heading
            greenText='Mission: Any Way Planet'
            whiteText='FROM THE BLOCKCHAIN GAME TO THE METAVERSE'
            isGreenTop={true}
            textAlign='center'
          />
          <p className={s.description}>
            From the very beginning, Mission: Any Way Planet invites you to
            discover a new exciting space story, a blockchain game with a
            gradual expansion of the plot. The more you play, the more
            opportunities you have.
          </p>
        </div>
        <div className={s.yearContainer}>
          <Diamond className={s.diamond} />
          <div className={s.diamond_mobile}>
            {' '}
            <Image
              src={diamond_mobile}
              width={430}
              height={200}
              alt='Rectangles'
            />
          </div>
          <Slider
            slidesPerView={
              width <= 1440 && width > 940 ? 3 : width <= 940 ? 2 : 5
            }
            withNavigation={true}
            classname={s.slider}
            prevEl={s.prevEl}
            nextEl={s.nextEl}
            spaceBetween={1}
          >
            {sliderItemsDefault.map((item, idx) => (
              <ItemSlider
                title={item.title}
                text={item.text}
                key={idx}
                year={item.year}
                quarter={item.quarter}
                count={idx+1}
              />
            ))}
          </Slider>
          <Arrows className={s.arrows} />
          <ArrowsResponsive className={s.arrows_responsive} />
        </div>
      </div>
    </div>
  )
}
