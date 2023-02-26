import { ComponentWrapper, Range, Tags } from 'components'
import { FC, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from 'shared/hooks/redux'
import { useToken } from 'shared/hooks/useToken'
import { mockTags } from 'shared/mocks/tags'
import { Filters, RaityFilters } from 'shared/types/filters'
import { setToken } from 'store/slices/auth'

import s from './subNavSection.module.scss'

interface SubNavProps {
  handleFilters: (filter: RaityFilters, value?: number[]) => void
  filters?: Filters
}

export const SubNavSection: FC<SubNavProps> = ({ handleFilters, filters }) => {
  const [selectedTab, setSelectedTab] = useState('normal')
  const accessToken = useToken()
  const dispatch = useAppDispatch()
  const token = useAppSelector(state => state.auth.token)

  useEffect(() => {
    if (!accessToken) return
    dispatch(setToken(accessToken))
  }, [accessToken])

  return (
    <div className={s.wrapper}>
      <div className={s.leftLineContainer}>
        <div className={s.line} />
      </div>
      <div className={s.rightLineContainer}>
        <div className={s.line} />
      </div>
      <div className={s.bottomLineBlock}>
        <div className={s.bottomLineContainer}>
          <div className={s.lineYellow} />
        </div>
        <div className={s.bottomLineContainer}>
          <div className={s.linePurple} />
        </div>
        <div className={s.bottomLineContainer}>
          <div className={s.lineBlue} />
        </div>
        <div className={s.bottomLineContainer}>
          <div className={s.lineBlue} />
        </div>
      </div>
      <ComponentWrapper label='rarity'>
        <Tags
          tags={mockTags}
          onClick={setSelectedTab}
          handleFilters={handleFilters}
          filters={filters}
        />
      </ComponentWrapper>
      <ComponentWrapper label='price, $'>
        <Range
          max={1000}
          min={50}
          step={1}
          variant='price'
          numbers={[50, 1000]}
          handleFilters={handleFilters}
        />
      </ComponentWrapper>

      {token ? (
        <ComponentWrapper label='price, $'>
          <Range
            max={100}
            min={0}
            step={1}
            variant='level'
            numbers={[0, 100]}
            handleFilters={handleFilters}
          />
        </ComponentWrapper>
      ) : null}
    </div>
  )
}
