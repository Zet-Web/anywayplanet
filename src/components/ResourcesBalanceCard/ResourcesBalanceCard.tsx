import { FC, useState } from 'react'
import cn from 'classnames'
import { decomposeAmount } from 'shared/helpers/decomposeAmount'
import BalanceCardUSDTFull from '/public/assets/img/balanceCardUSDTFull.svg'
import BalanceCardMAPFull from '/public/assets/img/balanceCardMAPFull.svg'
import s from './resourcesBalanceCard.module.scss'
import { CheckMetaMaskConnect } from 'components/CheckMetaMaskConnect/ResourcesBalanceCard/CheckMetaMaskConnect'

export interface ResourcesBalanceCardProps {
  resource: 'usdt' | 'map'
  amount: number
  features: ('add funds' | 'transfer' | 'withdraw funds')[]
}

export const ResourcesBalanceCard: FC<ResourcesBalanceCardProps> = ({
  amount,
  features,
  resource,
}) => {
  const [decomposedAmount] = useState(decomposeAmount(amount))

  return (
    <div className={cn(s.balanceCard, s[resource])}>
      {(resource === 'usdt' && <BalanceCardUSDTFull className={s.bg} />) ||
        (resource === 'map' && <BalanceCardMAPFull className={s.bg} />)}

      <p className={s.balanceTitle}>Balance {resource}</p>

      <p className={cn(s.balnceAmount, s[resource])}>
        {decomposedAmount.thousand}
        {decomposedAmount.hundreds}
        <span className={s.fsSmall}>{decomposedAmount.float}</span>
      </p>

      <div className={s.featureWrapper}>
        <CheckMetaMaskConnect className={s.featureBtn}>
          {features.map(feature => {
            const classesFeature = cn(
              { [s.add]: feature === 'add funds' },
              { [s.transfer]: feature === 'transfer' },
              { [s.withdraw]: feature === 'withdraw funds' }
            )

            return (
              <button
                type='button'
                className={cn(s.featureBtn, classesFeature, s[resource])}
                key={feature}
              >
                {feature}
              </button>
            )
          })}
        </CheckMetaMaskConnect>
      </div>
    </div>
  )
}
