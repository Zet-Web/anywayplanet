import { FC } from 'react'

import TokenIcon from '../../../public/assets/icons/uniswapIcon.svg'
import MapIcon from '../../../public/assets/icons/mapIcon.svg'

import s from './tokens.module.scss'

export const Tokens: FC = () => {
  return (
    <section className={s.section}>
      <div className={s.sectionOutline} />
      <div className={s.container}>
        <div className={s.lineContainer}>
          <div className={s.line} />
        </div>
        <div className={s.headingWrap}>
          <h2 className={s.heading}>tokens</h2>
        </div>
        <div className={s.innerWrap}>
          <MapIcon className={s.mapIcon} />
          <p className={s.promo}>game utility token fixed supply</p>
          <div className={s.buttonWrap}>
            <button className={s.button}>
              <TokenIcon />
            </button>
            <p className={s.buttonText}>map on uniswap</p>
          </div>
        </div>
      </div>
    </section>
  )
}
