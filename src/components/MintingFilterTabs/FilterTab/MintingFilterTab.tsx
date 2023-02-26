import { FC } from 'react'

import classNames from 'classnames'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

import s from './mintingFilterTab.module.scss'

export interface FilterTabProps {
  icon: JSX.Element
  label: string
  count: number
  activeTab?: number
  active?: boolean
  onClick?: () => void
}

export const MintingFilterTab: FC<FilterTabProps> = ({
  icon,
  label,
  count,
  active,
  activeTab,
  onClick,
}) => {
  const { width } = useWindowDimensions()

  const activeBackground = classNames({
    [s.oxygenBackground]: activeTab === 0,
    [s.waterBackground]: activeTab === 1,
    [s.energyBackground]: activeTab === 2,
    [s.mineralsBackground]: activeTab === 3,
  })

  return (
    <div
      className={classNames(s.filterTab, {
        [s.active]: active,
        [activeBackground]: active,
      })}
      onClick={onClick}
    >
      <span className={s.filterTabHeader}>
        {icon}
        <span className={s.filterTabLabel}>{label}</span>
      </span>

      {/* works only when mobile's or tablet's size*/}
      <div className={s.mobileAndTabletBreak} />

      <div className={s.filterTabCount}>
        {width < 992 && count < 10 ? `0${count}` : count}
      </div>
    </div>
  )
}
