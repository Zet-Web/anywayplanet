import { FC, ReactNode } from 'react'

import cn from 'classnames'
import s from './exampleWrapper.module.scss'

interface ExampleWrapperProps {
  title: string
  children: ReactNode
  isDark?: boolean
}

export const ExampleWrapper: FC<ExampleWrapperProps> = ({
  title,
  children,
  isDark,
}) => {
  return (
    <section className={cn(s.wrapper, { [s.dark]: isDark })}>
      <div className={s.title}>
        <p>{title}</p>
      </div>
      {children}
    </section>
  )
}
