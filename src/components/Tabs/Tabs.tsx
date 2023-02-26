import { FC } from 'react'
import { Tabs as ReactTabs, TabList } from 'react-tabs'
import { TabItem, TabItemProps } from 'components/TabItem/TabItem'
import 'react-tabs/style/react-tabs.css'
import s from './tabs.module.scss'
import { Filters } from 'shared/types/filters'

interface TabsListProps {
  tabs: TabItemProps[],
  filters?: Filters
}

export const Tabs: FC<TabsListProps> = ({ tabs }) => {
  return (
    <ReactTabs className={s.wrapper} disabledTabClassName={s.disableItem}>
      <div className={s.disableTabLandPlot}>coming soon</div>
      <div className={s.disableTabSkins}>coming soon</div>
      <TabList className={s.tabsList}>
        {tabs.map(({ icon, label, multiline, isDisable }) => (
          <TabItem
            key={label}
            icon={icon}
            label={label}
            multiline={multiline}
            isDisable={isDisable}
          />
        ))}
      </TabList>
    </ReactTabs>
  )
}
