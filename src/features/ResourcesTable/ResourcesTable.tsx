import { FC, useState } from 'react'

import s from './ResourcesTable.module.scss'

import {
  resourcesMain,
  resourcesMainType,
  resourcesTabs,
  resourcesTabsType,
} from '../../shared/mocks/resourcesTabs'

import cn from 'classnames'

export interface ResourcesTableProps {
  label: string
  resourcesTabs: resourcesTabsType[]
  resourcesMain: resourcesMainType[]
}

const activeCurrency = (index: number) => {
  if (index === 1) {
    return 'usdt'
  } else if (index === 2) {
    return 'map'
  } else if (index === 3) {
    return 'ox'
  } else if (index === 4) {
    return 'wat'
  } else if (index === 5) {
    return 'en'
  } else if (index === 6) {
    return 'mn'
  }
}
export const ResourcesTable: FC<ResourcesTableProps> = ({
  label,
  resourcesTabs,
  resourcesMain,
}) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  const [isActiveSelect, setIsActiveSelect] = useState<boolean>(false)
  return (
    <div className={s.wrapper}>
      <h3 className={s.label}>{label}</h3>
      <div className={s.filterMenuDesktop}>
        <ul className={s.tabsList}>
          {resourcesTabs.map(({ TabLabel }, index) => {
            const activeBackground = cn({
              [s.imgAll]: TabLabel === 'all',
              [s.imgUsdt]: TabLabel === 'usdt',
              [s.imgMinerals]: TabLabel === 'minerals',
              [s.imgEnergy]: TabLabel === 'energy',
              [s.imgOxygen]: TabLabel === 'oxygen',
              [s.imgWater]: TabLabel === 'water',
              [s.imgMap]: TabLabel === 'map',
            })
            return (
              <li
                className={cn(s.tabItem, { [s.active]: activeTab === index })}
                key={index}
                onClick={() => setActiveTab(index)}
              >
                <div className={activeBackground} />
                <div>{TabLabel}</div>
              </li>
            )
          })}
        </ul>
      </div>
      <div className={s.filterMenuMobile}>
        <ul className={s.tabsList}>
          {isActiveSelect ? (
            <MobileMenuOpen
              onClick={setActiveTab}
              setIsActiveSelect={setIsActiveSelect}
            />
          ) : (
            <MobileMenu onClick={setIsActiveSelect} activeTab={activeTab} />
          )}
        </ul>
      </div>
      <div className={s.main}>
        <div className={s.mainTitle}>
          <div className={s.time}>Date and time of transaction</div>
          <div className={s.type}>Transaction type</div>
          <div className={s.currency}>Transaction currency</div>
          <div className={s.amount}>Transaction amount</div>
        </div>
        <ul className={s.mainList}>
          {resourcesMain
            .filter(
              ({ TransactionCurrency }, index) =>
                activeTab === 0 ||
                TransactionCurrency.TabLabel === activeCurrency(activeTab)
            )
            .map(
              (
                {
                  dateAndTime,
                  TransactionType,
                  TransactionCurrency,
                  TransactionAmount,
                },
                index
              ) => {
                const activeBackground = cn({
                  [s.imgUsdt]: TransactionCurrency.TabLabel === 'usdt',
                  [s.imgMinerals]: TransactionCurrency.TabLabel === 'mn',
                  [s.imgEnergy]: TransactionCurrency.TabLabel === 'en',
                  [s.imgOxygen]: TransactionCurrency.TabLabel === 'ox',
                  [s.imgWater]: TransactionCurrency.TabLabel === 'wat',
                  [s.imgMap]: TransactionCurrency.TabLabel === 'map',
                })
                const activeColor = cn({
                  [s.usdtColor]: TransactionCurrency.TabLabel === 'usdt',
                  [s.mineralsColor]: TransactionCurrency.TabLabel === 'mn',
                  [s.energyColor]: TransactionCurrency.TabLabel === 'en',
                  [s.oxygenColor]: TransactionCurrency.TabLabel === 'ox',
                  [s.waterColor]: TransactionCurrency.TabLabel === 'wat',
                  [s.mapColor]: TransactionCurrency.TabLabel === 'map',
                })
                return (
                  <li className={s.mainItem} key={index}>
                    <div className={s.dateAndTime}>
                      <div className={s.dateMobile}>Date</div>
                      {dateAndTime}
                    </div>
                    <div className={s.transactionType}>
                      <div className={s.transactionTypeMobile}>Transaction</div>
                      {TransactionType}
                    </div>
                    <div className={s.transactionCurrency}>
                      <div className={s.transactionCurrencyMobile}>
                        Transaction Currency
                      </div>
                      <div className={activeBackground} />
                      <div
                        className={cn(
                          s.transactionCurrencyTextMobile,
                          activeColor
                        )}
                      >
                        {TransactionCurrency.TabLabel}
                      </div>
                    </div>
                    <div className={s.transactionAmount}>
                      <div className={s.transactionAmountMobile}>
                        Transaction Amount
                      </div>
                      <p
                        className={cn({
                          [s.red]: +TransactionAmount < 0,
                          [s.green]: +TransactionAmount > 0,
                        })}
                      >
                        {TransactionAmount}
                      </p>
                    </div>
                  </li>
                )
              }
            )}
        </ul>
      </div>
    </div>
  )
}

interface MobileMenuType {
  onClick: (isActive: boolean) => void
  activeTab: number
}

const MobileMenu = ({ onClick, activeTab }: MobileMenuType) => {
  return (
    <>
      {resourcesTabs
        .filter((el, index) => index === activeTab)
        .map(({ TabLabel, icon }, index) => {
          return (
            <div className={s.wrapperMenu} key={index}>
              <div className={s.arrowMenu} />
              <button
                className={cn(s.buttonItem)}
                type='button'
                onClick={() => onClick(true)}
                key={index}
              >
                <img
                  src={icon}
                  className={cn({ [s.mapIcon]: TabLabel === 'map' })}
                />
                {TabLabel}
              </button>
            </div>
          )
        })}
    </>
  )
}

interface MobileMenuOpenType {
  onClick: (activeTab: number) => void
  setIsActiveSelect: (isActive: boolean) => void
}

const MobileMenuOpen = ({ onClick, setIsActiveSelect }: MobileMenuOpenType) => {
  return (
    <>
      {resourcesTabs.map(({ TabLabel, icon }, index) => {
        const onClickHandler = (index: number) => {
          onClick(index)
          setIsActiveSelect(false)
        }
        return (
          <button
            className={s.buttonItem}
            type='button'
            onClick={() => onClickHandler(index)}
            key={index}
          >
            <img
              src={icon}
              className={cn({ [s.mapIcon]: TabLabel === 'map' })}
            />
            {TabLabel}
          </button>
        )
      })}
    </>
  )
}
