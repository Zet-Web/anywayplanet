import { FC, MouseEvent } from 'react'
import cn from 'classnames'
import { СurrencyTabProps } from 'features/SelectCurrencyTabs/SelectCurrencyTabs'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { CurrencyType } from 'shared/types'
import s from './mintingCurrencyTabItem.module.scss'

interface MintingCurrencyTabItemProps extends СurrencyTabProps {
  currencyType: CurrencyType
  firstTab: CurrencyType
  onTabClick: ({ currentTarget }: MouseEvent<HTMLButtonElement>) => void
}

export const MintingCurrencyTabItem: FC<MintingCurrencyTabItemProps> = ({
  avalible,
  currencyName,
  icon,
  сurrencyAbbreviation,
  currencyType,
  onTabClick,
  firstTab,
}) => {
  const { width } = useWindowDimensions()

  return (
    <button
      type='button'
      className={cn(
        s.wrapper,
        s[currencyName],
        { [s.active]: currencyType === currencyName },
        { [s.firstTab]: firstTab === currencyName }
      )}
      data-currency={currencyName}
      onClick={onTabClick}
    >
      <div className={s.leftContent}>
        Buy
        {width > 984 ? <br /> : " "}
        for
        <span className={s.сurrencyAbbreviation}> {сurrencyAbbreviation}</span>
      </div>
      <div className={s.rightContent}>
        avalible
        {width > 984 ? <br /> : " "}
        <span className={s.avalible}>
          {avalible}
          <span className={s.сurrencyAbbreviation}>
            {' '}
            {сurrencyAbbreviation}
          </span>
        </span>
      </div>
    </button>
  )
}
