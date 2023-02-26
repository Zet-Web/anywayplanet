import { FC, useEffect, useState } from 'react'

import classNames from 'classnames'

import s from './filterTab.module.scss'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

export interface FilterTabProps {
  icon: JSX.Element
  label: string
  count: number
  active?: boolean
  onClick?: () => void
}

export const FilterTab: FC<FilterTabProps> = ({
  icon,
  label,
  count,
  active,
  onClick,
}) => {
  const { width } = useWindowDimensions()

  return (
    <div
      className={classNames(s.filterTab, { [s.active]: active })}
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
