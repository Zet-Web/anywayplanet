import { FC } from 'react'
import cn from 'classnames'
import s from './greenTitle.module.scss'

type GreenTitleProps = {
  text: string
  lightBorder?: boolean
}

export const GreenTitle: FC<GreenTitleProps> = ({
  text,
  lightBorder = false,
}) => {
  return (
    <span className={s.greenTextContainer}>
      <span className={s.greenText}>{text}</span>
      <span className={cn(s.greenTextBorder, lightBorder && s.lightBorder)}>
        {text}
      </span>
    </span>
  )
}
