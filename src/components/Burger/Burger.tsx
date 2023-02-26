import { FC, useState } from 'react'
import cn from 'classnames'
import s from './burger.module.scss'

interface BurgerProps {
  onChange: (isOpen: boolean) => void
  className: string
  isMenuOpen: boolean
}

export const Burger: FC<BurgerProps> = ({
  onChange,
  className,
  isMenuOpen,
}) => {
  const [isOpen, setIsOpen] = useState(isMenuOpen)
  const handleOpen = () => {
    setIsOpen(!isOpen)
    onChange(isOpen)
  }

  return (
    <>
      <label onChange={handleOpen} className={cn(s.burger, className)}>
        <input id='burger' type='checkbox' checked={isMenuOpen} readOnly />
        <span></span>
        <span></span>
        <span></span>
      </label>
    </>
  )
}
