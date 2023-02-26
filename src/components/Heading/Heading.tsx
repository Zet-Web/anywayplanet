import { FC } from 'react'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'
import { GreenTitle } from 'components'
import s from './heading.module.scss'

interface HeadingProps {
  whiteText: string
  greenText: string
  greenTextSecondLine?: string
  isGreenTop: boolean
  icon?: StaticImageData
  textAlign?: 'left' | 'center' | 'right'
}

export const Heading: FC<HeadingProps> = ({
  whiteText,
  greenText,
  greenTextSecondLine,
  icon,
  isGreenTop,
  textAlign = 'left',
}) => {
  return (
    <div className={cn(s.container, s[textAlign])}>
      {icon && (
        <div className={s.iconWrapper}>
          <Image
            className={s.headingIcon}
            src={icon}
            alt={'title icon'}
          />
        </div>
      )}
      <h2 className={cn(s.title, { [s.titleLPadding]: icon })}>
        {isGreenTop && <GreenTitle text={greenText} />}
        {isGreenTop && greenTextSecondLine && (
          <GreenTitle text={greenTextSecondLine} />
        )}
        {whiteText}
        {!isGreenTop && <GreenTitle text={greenText} />}
        {!isGreenTop && greenTextSecondLine && (
          <GreenTitle text={greenTextSecondLine} />
        )}
      </h2>
    </div>
  )
}
