import { FC } from 'react'
import cn from 'classnames'
import { GreenTitle } from 'components/GreenTitle/GreenTitle'
import s from './accountHeading.module.scss'

interface AccountHeadingProps {
  title: string
  className?: string
}

export const AccountHeading: FC<AccountHeadingProps> = ({ title, className }) => {
  return (
    <div className={cn(s.container, className)}>
      <div className={s.breadcrampsContainer}>
        <GreenTitle lightBorder text={'Personal backoffice'} />
        <p className={s.breadcrampsTitle}> / {title}</p>
      </div>
      <h1 className={s.title}>{title}</h1>
    </div>
  )
}
