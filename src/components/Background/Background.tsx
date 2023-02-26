import Image from 'next/image'
import { FC } from 'react'

import s from './background.module.scss'
export const Background: FC = () => {
  return (
    <div className={s.background}>
      <div>
        <div id='stars'></div>
        <div id='stars2'></div>
        <div id='stars3'></div>
      </div>
    </div>
  )
}
