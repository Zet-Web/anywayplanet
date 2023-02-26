import { FC } from 'react'
import { ItemCard } from 'components'

import s from './cardCatalog.module.scss'
import { MarketCards } from 'shared/types/marketCards'

interface CardCatalogProps {
  cards: MarketCards[]
  onItemClick: () => void
}

enum Rarity {
  LEGENDARY = 'legend',
  EPIC = 'epic',
  RARE = 'rare',
  COMMON = 'normal',
}

export const CardCatalog: FC<CardCatalogProps> = ({ cards, onItemClick }) => {
  return (
    <section className={s.container}>
      <div className={s.gridContainer}>
        {cards.map(item => {
          Object.keys(item.config.production)
          return (
            <ItemCard
              onClick={onItemClick}
              key={item.id}
              id={item.id}
              rarity={item.rarity}
              price={item.price}
              level={item.level}
              productivity={
                item.config.production[Object.keys(item.config.production)[0]]
              }
              image={item.image}
              hash={item.hash}
              card={item}
            />
          )
        })}
      </div>
    </section>
  )
}
