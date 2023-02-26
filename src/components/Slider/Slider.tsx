import { FC, ReactNode } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import cn from 'classnames'

import { A11y, Navigation, Pagination, Autoplay } from 'swiper'

import s from './Slider.module.scss'
import 'swiper/css'

interface SliderProps {
  children: ReactNode[] | []
  slidesPerView?: number
  withNavigation?: boolean
  withPagination?: boolean
  centeredSlides?: boolean
  nextEl?: string
  prevEl?: string
  classname?: string
  spaceBetween?: number
  variant?: 'default' | 'wide'
  // Знаю что any
  breakpoints?: any
}

export const Slider: FC<SliderProps> = ({
  children,
  slidesPerView = 5.5,
  withNavigation = false,
  withPagination = false,
  centeredSlides = false,
  spaceBetween = 50,
  nextEl = 'moreNext',
  prevEl = 'morePrev',
  classname,
  variant = 'default',
  breakpoints,
}) => {
  const paginationOptions = withPagination && { clickable: true }
  const navigationOptions = withNavigation && {
    nextEl: `.${nextEl}`,
    prevEl: `.${prevEl}`,
  }

  return (
    <div className={cn(s.slider, classname)}>
      <Swiper
        autoHeight={true}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation={navigationOptions || false}
        pagination={paginationOptions}
        centeredSlides={centeredSlides}
        breakpoints={breakpoints}
        zoom={true}
      >
        {children.length
          ? children.map((child, idx) => (
              <SwiperSlide key={idx}>{child}</SwiperSlide>
            ))
          : null}
      </Swiper>
      {withNavigation && (
        <>
          <div className={cn(s.nextElWrapper, s[variant])}>
            <div
              className={cn(s.swiperButtonNext, nextEl, 'swiper-button-next')}
            />
          </div>
          <div
            className={cn(s.swiperButtonPrev, prevEl, 'swiper-button-prev')}
          />
        </>
      )}
    </div>
  )
}
