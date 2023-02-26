import { FC } from 'react'
import cn from 'classnames'
import { decomposeAmount } from 'shared/helpers/decomposeAmount'
import TransferIcon from '/public/assets/icons/recources/transfer-token.svg'
import SwapIcon from '/public/assets/icons/recources/swap-token.svg'
import s from './resourcesTokenCard.module.scss'

export interface ResourcesTokenCardProps {
  type: 'oxygen' | 'water' | 'energy' | 'minerals'
  balance: number
  collectionCounter: { counterName: string; amount: number }[]
  index?: number
}

export const ResourcesTokenCard: FC<ResourcesTokenCardProps> = ({
  balance,
  collectionCounter,
  type,
  index,
}) => {
  let unit: string

  switch (type) {
    case 'oxygen':
      unit = 'OX'
      break
    case 'water':
      unit = 'WT'
      break
    case 'energy':
      unit = 'EN'
      break
    case 'minerals':
      unit = 'MN'
      break
  }

  return (
    <div className={s.tokenCard} data-grid-number={index}>
      <h3 className={cn(s.title, s[type])}>{type}</h3>
      <div className={s.balanceWrapper}>
        <p className={s.balanceTitle}>
          Token <br />
          balance
        </p>
        <p className={cn(s.balanceAmount, s[type])}>
          {`${decomposeAmount(balance).thousand}${
            decomposeAmount(balance).hundreds
          } `}
          <span className={s.unit}>{unit}</span>
        </p>
      </div>

      <div className={s.tokenButtons}>
        <button type='button' className={cn(s.btn, s.transferBtn)}>
          <TransferIcon className={cn(s.icon, s[type])} />
          transfer
        </button>
        <button type='button' className={cn(s.btn, s.swapBtn)}>
          <SwapIcon className={cn(s.icon, s[type])} />
          swap
        </button>
      </div>

      <div className={s.colectionCounters}>
        {collectionCounter.map(({ amount, counterName }) => (
          <div className={s.counter} key={counterName}>
            <p>{counterName}</p>
            <p className={s[type]}>
              <span className={s.count}>
                {`${decomposeAmount(amount).thousand}${
                  decomposeAmount(amount).hundreds
                } `}
              </span>
              <span className={s.unit}>{unit}</span>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
