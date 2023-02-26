import { FC } from 'react'
import RewriteIcon from '/public/assets/icons/penIcon.svg'
import EyeIcon from '/public/assets/icons/eyeIcon.svg'
import cn from 'classnames'

import s from './input.module.scss'

interface InputProps {
  value: string | number
  onChange: (value: string) => void
  placeholder?: string
  label: string
  className?: string
  labelClassName?: string
  iconType?: 'password' | 'rewrite'
  button?: string
  onButtonClick?: () => void
  onIconClick?: () => void
  type?: 'text' | 'password' | 'number' | 'email'
  min?: number
  max?: number
}

export const Input: FC<InputProps> = ({
  className,
  onChange,
  iconType,
  label,
  labelClassName,
  button,
  onButtonClick,
  onIconClick,
  type = 'text',
  ...props
}) => {
  const iconClickHandler = () => {
    onIconClick?.()
  }
  const buttonClickHandler = () => {
    onButtonClick?.()
  }
  return (
    <div className={s.inputContainer}>
      <div className={s.inputContent}>
        <label className={cn(s.label, labelClassName)}>{label}</label>
        <input
          onChange={e => onChange(e.target.value)}
          type={type}
          className={cn(s.input, className)}
          {...props}
        />
      </div>
      {iconType && (
        <span className={s.icon} onClick={iconClickHandler}>
          {iconType === 'password' ? <EyeIcon /> : <RewriteIcon />}
        </span>
      )}
      {button && (
        <span className={s.buttonText} onClick={buttonClickHandler}>
          {button}
        </span>
      )}
    </div>
  )
}
