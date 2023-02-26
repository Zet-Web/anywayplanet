import { FC, useState } from 'react'

import { FilterTab, FilterTabProps } from './FilterTab/FilterTab'

import s from './filterTabs.module.scss'

interface FilterTabsProps {
  tabs: FilterTabProps[]
}

export const FilterTabs: FC<FilterTabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<number>(0)
  return (
    <div className={s.filterTabs}>
      {tabs.map((tab, index) => (
        <FilterTab
          key={index}
          icon={tab.icon}
          label={tab.label}
          count={tab.count}
          active={activeTab === index}
          onClick={() => setActiveTab(index)}
        />
      ))}
    </div>
  )
}
