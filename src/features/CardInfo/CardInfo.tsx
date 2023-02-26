import { FC, useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import ThunderIcon from '../../../public/assets/icons/thunder.svg'
import ThunderIconMedium from '../../../public/assets/icons/thunderMedium.svg'
import ThunderSmall from '../../../public/assets/icons/thunderSmall.svg'
import ThunderIconColumn from '../../../public/assets/icons/thunderIconColumn.svg'
import GlassIcon from '../../../public/assets/icons/glassOfWater.svg'
import GlassIconMedium from '../../../public/assets/icons/glassOfWaterMedium.svg'
import BigGlassIcon from '../../../public/assets/icons/bigGlassOfWater.svg'
import CloseButtonYellow from '../../../public/assets/icons/closeButtonYellow.svg'
import CloseButtonBlue from '../../../public/assets/icons/closeButtonBlue.svg'

import s from './cardInfo.module.scss'
import { decomposeAmount } from '../../shared/helpers/decomposeAmount'
import { mockSelectCurrencyTabs } from '../../shared/mocks/mockSelectCurrency'
import { SelectCurrencyTabs } from '../SelectCurrencyTabs/SelectCurrencyTabs'
import { useWindowDimensions } from '../../shared/hooks/useWindowDimensions'
import { MarketCards } from 'shared/types/marketCards'

export interface CardInfoProps {
  type?: 'RARE' | 'EPIC' | 'LEGENDARY'
  rarity?: 'RARE' | 'EPIC' | 'COMMON' | 'LEGENDARY'
  title: string
  resource: string
  level: number
  capacity: number
  minting_left: number
  amount: number
  hashtag: string
  image: string
  onClose?: () => void
  productivity: number //TODO
  price: any //TODO
  buildingType: string //TODO
}
export const CardInfo: FC<CardInfoProps> = ({
  type = 'LEGENDARY',
  title,
  resource,
  level,
  productivity,
  capacity,
  hashtag,
  onClose,
  rarity,
  price,
  image,
  buildingType,
}) => {
  // const productivity = config?.production[buildingType]
  // const capacity = config?.capacity[buildingType]
  // const minting_left = config?.usageCost[buildingType]
  // const amount = 999

  const lineClasses = cn(s.line, {
    [s.legendLine]: rarity === 'LEGENDARY',
    [s.rareLine]: rarity === 'RARE',
    [s.epicLine]: rarity === 'EPIC',
  })

  const imageTextClasses = {
    [s.legendImage]: rarity === 'LEGENDARY',
    [s.rareImage]: rarity === 'RARE',
    [s.epicImage]: rarity === 'EPIC',
  }
  const [decomposedAmount] = useState(decomposeAmount(price.USDT))
  const { width } = useWindowDimensions()
  return (
    <section className={s.card}>
      <div className={s.headingWrap}>
        {width < 991 ? (
          <div className={s.thunderIconWrap}>
            <div className={s.thunderIconWrap}>
              {rarity === 'LEGENDARY' ? (
                <ThunderIconMedium />
              ) : (
                <GlassIconMedium />
              )}
            </div>
          </div>
        ) : (
          <div className={s.thunderIconWrap}>
            {rarity === 'LEGENDARY' ? <ThunderIcon /> : <BigGlassIcon />}
          </div>
        )}

        <h3 className={s.heading}>
          <span className={s.textTransform}>nft</span>
          <span> </span>
          {title}
        </h3>

        {width < 767 && (
          <div className={s.closeButton} onClick={onClose}>
            {rarity === 'LEGENDARY' ? (
              <CloseButtonYellow />
            ) : (
              <CloseButtonBlue />
            )}
          </div>
        )}
      </div>
      <div className={cn(s.topLineContainer)}>
        <div className={lineClasses} />
      </div>
      <div className={cn(s.bottomLineContainer)}>
        <div className={lineClasses} />
      </div>
      <div className={cn(s.rightLineContainer)}>
        <div className={lineClasses} />
      </div>
      <div className={cn(s.leftLineContainer)}>
        <div className={lineClasses} />
      </div>
      <div className={s.cardInnerWrap}>
        <div className={s.imageWrap}>
          <p className={cn(s.imageText, s.hex, imageTextClasses)}>{'hash'}</p>
          <p className={cn(s.imageText, s.cardName, imageTextClasses)}>
            {rarity}
          </p>
          <Image src={image} width={372} height={424} alt={type} />
        </div>
        <div className={s.wrapContent}>
          <div className={s.table}>
            <div className={s.tableRow}>
              <div className={s.property}>Resource</div>
              <div style={{ textTransform: 'uppercase' }} className={s.value}>
                {/* <div className={s.glassIconWrap}>
                  {width < 767 ? (
                    <div className={s.thunderIconWrap}>
                      <div className={s.thunderIconWrap}>
                        {rarity === 'LEGENDARY' ? (
                          <ThunderSmall />
                        ) : (
                          <GlassIcon />
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className={s.thunderIconWrap}>
                      {rarity === 'LEGENDARY' ? (
                        <ThunderIconColumn />
                      ) : (
                        <GlassIcon />
                      )}
                    </div>
                  )}
                </div>
                </div> */}
                {buildingType}
              </div>
            </div>
            <div className={s.tableRow}>
              <div className={s.property}>Level</div>
              <div className={s.value}>{level}</div>
            </div>
            <div className={s.tableRow}>
              <div className={s.property}>Productivity</div>
              <div className={cn(s.value, s.blueColor)}>
                {productivity} WR / 24 hr
              </div>
            </div>
            <div className={s.tableRow}>
              <div className={s.property}>Storage capacity</div>
              <div className={s.value}>{capacity} WR</div>
            </div>
            <div className={s.tableRow}>
              <div className={s.property}>Minting Left</div>
              <div className={s.value}>{''} times</div>
            </div>
          </div>
          <div className={s.currentPrice}>
            <h4 className={s.currentPriceHeading}>current price</h4>
            <div className={s.price}>
              $
              <p className={cn(s.balanceAmount, s[buildingType])}>
                {decomposedAmount.thousand}
                {decomposedAmount.hundreds}
                <span className={s.fsSmall}>{decomposedAmount.float}</span>
              </p>
            </div>
            <div className={s.convertedPrices}>
              <p className={cn(s.wt, s.textTransform)}>
                /&nbsp;85&nbsp;000&nbsp;wt
              </p>
              <p className={cn(s.ox, s.textTransform)}>
                /&nbsp;85&nbsp;000&nbsp;ox
              </p>
              <p className={cn(s.en, s.textTransform)}>
                /&nbsp;120&nbsp;000&nbsp;wt
              </p>
            </div>
          </div>
        </div>
      </div>
      <SelectCurrencyTabs mockSelectCurrencyTabs={mockSelectCurrencyTabs} />
    </section>
  )
}
