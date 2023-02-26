import { FC, useState } from 'react'
import s from "./menuLang.module.scss"
import cn from "classnames"

interface PropsMenuLang {
  className?: string
}

export const MenuLang: FC<PropsMenuLang> = ({ className }) => {
  const [lang, setLang] = useState("EN")
  const [active, setActive] = useState(false)

  return (
    <div
      className={cn(s.toggle, className)}
      onClick={() => setActive(prev => !prev)}
    >
      {lang}
      <ul className={cn(s.dropdown, {
        [s.active]: active
      })}>
        <li onClick={() => setLang("EN")} className={s.en}>EN</li>
        <li onClick={() => setLang("RU")} className={s.ru}>RU</li>
      </ul>
    </div >
  )
}


