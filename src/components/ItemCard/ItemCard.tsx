import Image, { ImageProps } from 'next/image'
import { FC } from 'react'
import cn from 'classnames'
import s from './itemCard.module.scss'
import { setSelectedCard } from 'store/slices/selectedCard'
import { useDispatch } from 'react-redux'
export interface ItemCardProps {
  id: number
  rarity: 'RARE' | 'EPIC' | 'LEGENDARY' | 'COMMON'
  price?: {
    USDT: number
    MAP: number
  }
  level: number
  image: ImageProps['src']
  onClick?: () => void
  //TODO
  hash?: string
  productivity?: number
  card?: any
}

export const ItemCard: FC<ItemCardProps> = ({
  id,
  rarity,
  price,
  level,
  image,
  onClick,
  hash,
  card,
}) => {
  const dispatch = useDispatch()
  const classes = cn(
    { [s.epic]: rarity === 'EPIC' },
    { [s.legend]: rarity === 'LEGENDARY' },
    { [s.rare]: rarity === 'RARE' },
    { [s.normal]: rarity === 'COMMON' }
  )

  const classesText = cn(
    { [s.epicText]: rarity === 'EPIC' },
    { [s.legendText]: rarity === 'LEGENDARY' },
    { [s.rareText]: rarity === 'RARE' },
    { [s.normalText]: rarity === 'COMMON' }
  )

  const addZero = (value: number) => (value < 10 ? `0${value}` : value)

  const selCardForModal = () => {
    dispatch(setSelectedCard(card))
    onClick?.()
  }

  return (
    // <<<<<<< HEAD
    //     <div className={s.itemCard} key={id} onClick={() => onClick(id)}>
    //       {(rarity === 'RARE' && <div className={s.bgRare} />) ||
    //         (rarity === 'EPIC' && <div className={s.bgEpic} />) ||
    //         (rarity === 'LEGENDARY' && <div className={s.bgLegend} />) || (
    //           <div className={s.bgNormal} />
    //         )}
    // =======
    <div className={s.itemCard} onClick={selCardForModal}>
      {(rarity === 'COMMON' && <div className={s.bgCommon} />) ||
        (rarity === 'RARE' && <div className={s.bgRare} />) ||
        (rarity === 'EPIC' && <div className={s.bgEpic} />) ||
        (rarity === 'LEGENDARY' && <div className={s.bgLegend} />)}

      <div className={s.cardTop}>
        <div className={s.image}>
          <Image src={image} width={240} height={267} alt='image' />
        </div>
        <div className={cn(s.hash, classes)}>{hash}</div>
        <div className={cn(s.quality, classes)}>{rarity}</div>
      </div>

      <div className={s.cardBottom}>
        <div className={s.cardProgress}>
          <div className={cn(s.progressLine, classes)} />
        </div>

        <div className={cn(s.nftText, classesText)}>NFT WOOD</div>

        <div className={s.price}>
          <span className={s.priceNum}>$ {price?.USDT}</span> / 1M WR
        </div>

        <div className={s.wrapper}>
          <div className={cn(s.level, classesText)}>
            <span>LEVEL</span>
            <span className={s.levelNum}>{addZero(level)}</span>
          </div>

          <div className={cn(s.productivity, classesText)}>
            <span>PRODUCTIVITY</span>
            <span className={s.productivityNum}>
              {price?.MAP} WR / 24 hours
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
