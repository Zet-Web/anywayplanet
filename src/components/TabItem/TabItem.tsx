import { ReactElement, SVGProps, useState } from 'react'
import type { ReactTabsFunctionComponent, TabProps } from 'react-tabs'
import cn from 'classnames'
import { Tab } from 'react-tabs'
import ArrowIcon from '/public/assets/icons/tabs/arrowDown.svg'
import s from './tabItem.module.scss'

export interface TabItemProps extends TabProps {
  label: string
  icon: (props: SVGProps<SVGElement>) => ReactElement
  multiline?: string[]
  isDisable?: boolean
}

export const TabItem: ReactTabsFunctionComponent<TabItemProps> = ({
  label,
  icon,
  multiline,
  isDisable,
  ...otherProps
}) => {
  const [isDropDown, setIsDropDown] = useState(false)

  const clickTabHandler = () => {
    setIsDropDown(!isDropDown)
  }

  const disableButtonClasses = cn(
    s.tabItem,
    { [s.disableButton]: isDisable },
    { [s.tabItemDropDown]: !isDisable }
  )

  return !multiline ? (
    <Tab
      className={s.tabItem}
      disabled={isDisable}
      selectedClassName={s.selectedTabItem}
      {...otherProps}
      data-value={label}
    >
      {icon({})}
      <h3 className={s.label}>{label}</h3>
      <div className={s.firstClass}>
        <div className={s.lastClass} />
      </div>
    </Tab>
  ) : (
    <li className={cn(s.tabItemDropDownWrap, { [s.disableItem]: isDisable })}>
      <button
        type='button'
        disabled={isDisable}
        className={disableButtonClasses}
        onClick={clickTabHandler}
      >
        {icon({})}
        <h3
          className={cn(s.label, { [s.disableLabel]: isDisable })}
          data-active={isDropDown}
          data-value={label}
        >
          {label}
        </h3>
        <div className={isDropDown ? s.reverseArrow : s.arrow}>
          <ArrowIcon />
        </div>
      </button>
      <ul className={cn(s.dropDownList, isDropDown ? '' : s.hidden)}>
        {multiline?.map(item => (
          <li key={item} className={s.dropDownItem}>
            {item}
          </li>
        ))}
      </ul>
    </li>
  )
}
TabItem.tabsRole = 'Tab'
