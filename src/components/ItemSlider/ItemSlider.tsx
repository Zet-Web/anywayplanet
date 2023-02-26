import { FC } from 'react'
import s from './itemSlider.module.scss'

interface ItemSliderProps {
  title?: string
  text?: string
  quarter: string
  year: number
  count: number
}

export const ItemSlider: FC<ItemSliderProps> = ({
  quarter,
  year,
  title,
  text,
  count,
}) => {
  return (
    <div className={s.default}>
      <div className={s.time}>
        <div className={s.quarter}>{quarter}</div>
        <div className={s.year}>{year}</div>
        <div className={s.count}>{count < 10 ? `0${count}` : count}</div>
      </div>
      {title ? (
        <div>
          <div className={s.title}>{title}</div>
          <div className={s.text}>{text}</div>
        </div>
      ) : null}
    </div>
  )
}
