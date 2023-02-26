import { FC } from 'react'
import Image from 'next/image'

import SmallCardEpic from '/public/assets/img/SmallCardEpic.svg'
import SmallCardLegend from '/public/assets/img/SmallCardLegend.svg'
import SmallCardRare from '/public/assets/img/SmallCardRare.svg'

import cn from 'classnames'
import s from './itemSmallCard.module.scss'
import { ItemCardProps } from 'components/ItemCard/ItemCard'

export const ItemSmallCard: FC<ItemCardProps> = ({
  id,
  price,
  level,
  productivity,
  hash,
  image,
  rarity
}) => {
  const classes = cn(
    { [s.epic]: rarity === 'EPIC' },
    { [s.legend]: rarity === 'LEGENDARY' },
    { [s.rare]: rarity === 'RARE' }
  )

  const classesText = cn(
    { [s.epicText]: rarity === 'EPIC' },
    { [s.legendText]: rarity === 'LEGENDARY' },
    { [s.rareText]: rarity === 'RARE' }
  )

  const addZero = (value: number) => (value < 10 ? `0${value}` : value)

  return (
    <div className={s.itemCard}>
      {(rarity === 'RARE' && <SmallCardRare className={s.bg} />) ||
        (rarity === 'EPIC' && <SmallCardEpic className={s.bg} />) ||
        (rarity === 'LEGENDARY' && <SmallCardLegend className={s.bg} />)}
      <div className={s.cardTop}>
        <div className={s.image}>
          <Image src={image} width={240} height={267} />
        </div>
        <div className={cn(s.hash, classes)}>{hash}</div>
        <div className={cn(s.quality, classes)}>{rarity}</div>
      </div>

      <div className={s.infoBlock}>
        <div className={s.cardBottom}>
          <div className={s.cardProgress}>
            <div className={cn(s.progressLine, classes)}></div>
          </div>
          <div className={cn(s.nftText, classesText)}>NFT WOOD</div>

          <div className={s.price}>
            <span className={s.priceNum}>{price?.USDT}</span>
            <span>&#32;/</span>
            <span className={s.gameCurrency}>1M WR</span>
          </div>
        </div>
        <div className={s.levelProductivity}>
          <div className={cn(s.levelBlock, classesText)}>
            <span className={s.level}>LEVEL</span>
            <span className={s.levelNum}>{addZero(level)}</span>
          </div>
          <div className={cn(s.productivity, classesText)}>
            <span className={s.productivityTitle}>PRODUCTIVITY</span>
            <span className={s.productivityNum}>
              {productivity} WR / 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
