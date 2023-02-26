import { FC, useState } from 'react'
import cn from 'classnames'
import { Tabs } from 'components'
import { SubNavSection } from 'features'
import { mockTabs } from 'shared/mocks/tabs'
import s from './filterWrapper.module.scss'
import { Filters, RaityFilters } from 'shared/types/filters'

interface FilterWrapperProps {
  handleFilters: (filter: RaityFilters, value?: number[]) => void
  filters: Filters
}

export const FilterWrapper: FC<FilterWrapperProps> = ({ handleFilters, filters }) => {
  const [isMobileFilterShow, setIsMobileFilterShow] = useState(false)

  const clickFilterButtonHandler = () => {
    setIsMobileFilterShow(!isMobileFilterShow)
  }

  return (
    <>
      <div className={s.filterMenu}>
        <div className={s.tabsWrapper}>
          <Tabs tabs={mockTabs}/>
        </div>
        <SubNavSection handleFilters={handleFilters} filters={filters}/>
      </div>
      <div className={s.filterMenuMobile}>
        {isMobileFilterShow ? (
          <button
            className={cn(s.btn, s.closeFilterBtn)}
            type='button'
            onClick={clickFilterButtonHandler}
          >
            FILTER
          </button>
        ) : (
          <button
            className={cn(s.btn, s.filterBtn)}
            type='button'
            onClick={clickFilterButtonHandler}
          >
            FILTER
          </button>
        )}
        {isMobileFilterShow && (
          <>
            <div className={s.tabsWrapper}>
              <Tabs tabs={mockTabs}/>
            </div>
            <SubNavSection handleFilters={handleFilters} filters={filters}/>
          </>
        )}
      </div>
    </>
  )
}
