import { FC, useState, MouseEvent, useEffect } from 'react'
import cn from 'classnames'
import { MintingCurrencyTabItem } from 'components'
import { СurrencyTabProps } from 'features/SelectCurrencyTabs/SelectCurrencyTabs'
import { CurrencyType } from 'shared/types'
import s from './mintingCurrencyTabs.module.scss'

interface MintingCurrencyTabsProps {
  price: number
  tabs: СurrencyTabProps[]
  currencyType: CurrencyType
}

export const MintingCurrencyTabs: FC<MintingCurrencyTabsProps> = ({
  price,
  tabs,
  currencyType,
}) => {
  const [currency, setСurrency] = useState<CurrencyType>(currencyType)
  const [unit, setUnit] = useState('')

  useEffect(() => {
    switch (currency) {
      case CurrencyType.Energy:
        setUnit('EN')
        break
      case CurrencyType.Minerals:
        setUnit('MN')
        break
      case CurrencyType.Oxygen:
        setUnit('OX')
        break
      case CurrencyType.Usdt:
        setUnit('USDT')
        break
      case CurrencyType.Water:
        setUnit('WT')
        break
    }
  }, [currency])

  const onTabClickHandler = ({
    currentTarget,
  }: MouseEvent<HTMLButtonElement>) => {
    setСurrency(currentTarget.dataset.currency as CurrencyType)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.priceWrapper}>
        <h4 className={s.title}>Current price</h4>
        <p className={cn(s.price, s[currency])}>
          {price} <span className={s.unit}>{unit}</span>
        </p>
      </div>
      <div className={s.currencyWrapper}>
        <h4 className={s.title}>Select the settlement currency</h4>
        <div className={s.tabsWrapper}>
          {tabs.map(
            ({ currencyName, avalible, сurrencyAbbreviation, icon }) => (
              <MintingCurrencyTabItem
                key={currencyName}
                currencyType={currency}
                currencyName={currencyName}
                avalible={avalible}
                сurrencyAbbreviation={сurrencyAbbreviation}
                icon={icon}
                onTabClick={onTabClickHandler}
                firstTab={currencyType}
              />
            )
          )}
        </div>
      </div>
    </div>
  )
}
