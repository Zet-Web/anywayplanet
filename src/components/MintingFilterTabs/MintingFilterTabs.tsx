import { FC } from 'react'

import { MintingFilterTab, FilterTabProps } from './FilterTab/MintingFilterTab'

import { useAppDispatch, useAppSelector } from '../../shared/hooks/redux'
import { setActiveTab } from '../../store/slices/mintingActiveTab'

import s from './mintingFilterTabs.module.scss'

interface FilterTabsProps {
  tabs: FilterTabProps[]
}

export const MintingFilterTabs: FC<FilterTabsProps> = ({ tabs }) => {
  const { activeTab } = useAppSelector(state => state.mintingActiveTab)
  const dispatch = useAppDispatch()
  const onClickHandler = (index: number) => {
    dispatch(setActiveTab(index))
  }
  return (
    <div className={s.filterTabs}>
      {tabs.map((tab, index) => (
        <MintingFilterTab
          key={index}
          icon={tab.icon}
          label={tab.label}
          count={tab.count}
          activeTab={activeTab}
          active={activeTab === index}
          onClick={() => onClickHandler(index)}
        />
      ))}
    </div>
  )
}
