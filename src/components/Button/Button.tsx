import cn from 'classnames'
import Image from 'next/image'
import { FC, ReactNode } from 'react'
import s from './button.module.scss'
interface ButtonProps {
  children: ReactNode
  label: string
  icon?: string
  className?: string
  onClick?: () => void
}
export const Button: FC<ButtonProps> = ({
  children,
  label,
  icon,
  className,
  onClick,
}) => {
  return (
    <div className={s.button} onClick={onClick}>
      <div className={cn(s.content, className)}>
        {icon && (
          <span className={s.icon}>
            <Image src={icon} width={29} height={29} />
          </span>
        )}
        {label}
      </div>
      {children}
    </div>
  )
}
