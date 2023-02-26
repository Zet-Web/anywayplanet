import { FC } from 'react'
import {
  ResourcesBalanceCard,
  ResourcesBalanceCardProps,
} from 'components/ResourcesBalanceCard/ResourcesBalanceCard'
import {
  ResourcesTokenCard,
  ResourcesTokenCardProps,
} from 'components/ResourcesTokenCard/ResourcesTokenCard'
import { AccountHeading } from 'components'
import s from './resourceDashboard.module.scss'

export interface ResourceDashboardProps {
  balanceCards: ResourcesBalanceCardProps[]
  tokenCards: ResourcesTokenCardProps[]
}

export const ResourceDashboard: FC<ResourceDashboardProps> = ({
  balanceCards,
  tokenCards,
}) => {
  return (
    <div className={s.resourceDushBoard}>
      <AccountHeading title='resources' className={s.mainTitle} />
      <div className={s.balanceWrapp}>
        {balanceCards.map(({ amount, features, resource }) => (
          <ResourcesBalanceCard
            key={resource}
            amount={amount}
            features={features}
            resource={resource}
          />
        ))}
      </div>
      <div className={s.tokenWrapp}>
        {tokenCards.map(({ balance, collectionCounter, type }, i) => (
          <ResourcesTokenCard
            index={i}
            balance={balance}
            collectionCounter={collectionCounter}
            type={type}
            key={type}
          />
        ))}
      </div>
    </div>
  )
}
