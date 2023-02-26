import cn from 'classnames'
import Image from 'next/image'
import { FC } from 'react'
import { useState } from 'react'
import { Button } from 'components'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import MediumCurrentUsdt from '/public/assets/img/button/MediumCurrentUsdt.svg'
import MediumCurrentWater from '/public/assets/img/button/MediumCurrentWater.svg'
import MediumCurrentEnergy from '/public/assets/img/button/MediumCurrentEnergy.svg'
import MediumCurrentOxygen from '/public/assets/img/button/MediumCurrentOxygen.svg'

import SmallCurrentUsdt from '/public/assets/img/button/SmallCurrentUsdt.svg'
import SmallCurrentEnergy from '/public/assets/img/button/SmallCurrentEnergy.svg'
import SmallCurrentWater from '/public/assets/img/button/SmallCurrentWater.svg'
import SmallCurrentOxygen from '/public/assets/img/button/SmallCurrentOxygen.svg'

import s from './SelectCurrencyTabs.module.scss'

export interface СurrencyTabProps {
  currencyName: string
  сurrencyAbbreviation: string
  avalible: number
  icon: string
}

interface SelectCurrencyTabsProps {
  mockSelectCurrencyTabs: СurrencyTabProps[]
  onClick?: () => void
  onChange?: () => void
}

export const SelectCurrencyTabs: FC<SelectCurrencyTabsProps> = ({
  mockSelectCurrencyTabs,
  onChange,
  onClick,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState('usdt')
  const { width } = useWindowDimensions()

  const getImage = (сurrencyAbbreviation: string) => {
    const data = mockSelectCurrencyTabs.filter(
      el => el.currencyName === сurrencyAbbreviation
    )
    return data[0].icon
  }
  const getCurrencyName = (сurrencyAbbreviation: string) => {
    const data = mockSelectCurrencyTabs.filter(
      el => el.currencyName === сurrencyAbbreviation
    )
    return data[0].currencyName
  }

  return (
    <div className={s.container}>
      <p className={s.title}>Select the settlement currency</p>
      <div className={s.grid}>
        {mockSelectCurrencyTabs.map(item => {
          const { currencyName, сurrencyAbbreviation, avalible, icon } = item

          return (
            <div
              className={cn(s.grid_item, s[currencyName], {
                [s.active]: currencyName == getCurrencyName(selectedCurrency),
              })}
              key={currencyName}
              onClick={() => {
                setSelectedCurrency(item.currencyName)
                onChange?.()
              }}
            >
              <div className={s.currencyType}>
                <Image className={s.icon} src={icon} width={53} height={46} />
                {width > 768 && (
                  <p className={s.choise_for}>
                    Buy
                    <br />
                    for
                    <span className={cn(s[currencyName])}>
                      {' '}
                      {сurrencyAbbreviation}
                    </span>
                  </p>
                )}
              </div>
              <div className={s.currencyAvalible}>
                {width < 767 && (
                  <p className={s.choise_for}>
                    Buy for
                    <span className={cn(s[currencyName])}>
                      {' '}
                      {сurrencyAbbreviation}
                    </span>
                  </p>
                )}

                <p className={cn(s[currencyName])}>
                  <span className={s.p_white}>avalible </span>
                  {avalible} <span>{item.сurrencyAbbreviation}</span>
                </p>
              </div>
            </div>
          )
        })}
      </div>
      <div className={s.button_container} onClick={() => onClick?.()}>
        <Button
          label={`BUY FOR ${getCurrencyName(selectedCurrency)}`}
          icon={getImage(selectedCurrency)}
          className={cn(s.button_custom)}
        >
          {width < 768 ? (
            <>
              {selectedCurrency === 'usdt' && <SmallCurrentUsdt />}
              {selectedCurrency === 'water' && <SmallCurrentWater />}
              {selectedCurrency === 'energy' && <SmallCurrentEnergy />}
              {selectedCurrency === 'oxygen' && <SmallCurrentOxygen />}
            </>
          ) : (
            <>
              {selectedCurrency === 'usdt' && <MediumCurrentUsdt />}
              {selectedCurrency === 'water' && <MediumCurrentWater />}
              {selectedCurrency === 'energy' && <MediumCurrentEnergy />}
              {selectedCurrency === 'oxygen' && <MediumCurrentOxygen />}
            </>
          )}
        </Button>
      </div>
    </div>
  )
}
