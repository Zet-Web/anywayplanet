import { FC, ReactNode } from 'react'

import s from './componentWrapper.module.scss'

interface ComponentWrapperProps {
  label: string
  children: ReactNode
}

export const ComponentWrapper: FC<ComponentWrapperProps> = ({
  label,
  children,
}) => {
  return (
    <div className={s.wrapper}>
      <h3 className={s.label}>{label}</h3>

      <div className={s.component}>{children}</div>
    </div>
  )
}
