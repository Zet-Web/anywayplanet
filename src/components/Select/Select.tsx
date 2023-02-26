import { FC, useState } from 'react'
import Image from 'next/image'

import BaseSelect, {
  ActionMeta,
  components,
  ControlProps,
  DropdownIndicatorProps,
  GroupBase,
  IndicatorsContainerProps,
  MenuListProps,
  MultiValue,
  MultiValueProps,
  OptionProps,
  PlaceholderProps,
  SingleValueProps,
  ValueContainerProps,
  StylesConfig
} from 'react-select'

import cn from "classnames"
import s from "./select.module.scss"

export type SelectOption = {
  value: string
  label: string,
  summ?: number,
  image: string
}
export type SelectType<T = SelectOption> = T | T[] | null

export interface SelectProps {
  options: SelectOption[],
  variant: "resource" | "net"
  value?: SelectType
  placeholder?: string
  onChange?: (newValue: SelectOption, actionMeta: ActionMeta<unknown>) => void
  id?: string
  className?: string
  isMulti?: boolean
  isDisabled?: boolean
  isClearable?: boolean
  ref?: HTMLSelectElement | null
  error?: Error
  preselected?: boolean,

}
export const Select: FC<SelectProps> = ({ options,
  value,
  placeholder = "Choose a  resource",
  variant,
  onChange,
  className,
  isDisabled = false,
  error,
  preselected = false,
}
) => {

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  const MenuList: FC<MenuListProps> = props => (
    <components.MenuList {...props} className={s.menuList} />
  )

  const SingleValue: FC<SingleValueProps<SelectOption | any>> = (props) => (
    <components.SingleValue  {...props}>
      <span className={cn(s.labelRes)}>{placeholder}</span>
      {
        variant === "resource" ?
          <span className={s.resWrapper}>

            <span className={s.currencyResource}>{props.data.value}</span>
            <span className={s.flexCol}>
              <span className={s.available}>AVAILABLE</span>
              <span className={s.sum}>{props.data.summ}</span>
            </span>
          </span> :
          <div className={s.netWrapper}>
            <div className={s.singleImageNet}>
              <Image src={props.data.image} width={52} height={52} alt="icon" />
            </div>
            <div className={s.currencyNet}>
              {props.data.label}&nbsp;&nbsp;
              {props.data.value}
            </div>
          </div>
      }
    </components.SingleValue>
  );

  const Option: FC<OptionProps<SelectOption>> = (props) => {
    let value = props.data.label
    return (
      <components.Option
        {...props}
      >
        <div className={s.flex}>
          {
            variant === "net" ?
              <div className={s.leftColumn}>
                <div className={s.optionImageNet}>
                  <Image src={props.data.image} width="100%" height="100%" alt="icon" />
                </div>
                <span>
                  &nbsp;&nbsp;
                  {props.data.label}
                  &nbsp;&nbsp;
                </span>
                <span>
                  {props.data.value}
                </span>
              </div> :
              <>
                <div className={s.leftColumn}>
                  <div className={s.optionResImage}>
                    <Image src={props.data.image} width="100%" height="100%" alt="icon" />
                  </div>
                  <span className={s.optionCurrencyName}>
                    {props.data.label}
                  </span>
                </div>
                <div className={s.rightColumn}>
                  <div className={s.optionAvailable}>
                    Available
                  </div>
                  <div className={cn(s.optionSumm, {
                    [s.green]: value === "usdt",
                    [s.purple1]: value === "mrt",
                    [s.blue]: value === "oxygen",
                    [s.blue2260]: value === "water",
                    [s.yellow]: value === "energy",
                    [s.purple2]: value === "minerals"
                  })}>
                    <span>{props.data.summ}</span>
                    <span className={s.optionCurrency}>
                      {props.data.value}
                    </span>
                  </div>
                </div>
              </>
          }

        </div>
      </components.Option >
    )
  }

  const DropdownIndicator: FC<DropdownIndicatorProps> = props => (
    <components.DropdownIndicator
      {...props}
      className={cn(s.arrow, { [s.isOpen]: isOpen })}
    />
  )

  const backgroundStyles: StylesConfig = {
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor:
          isFocused ? '#363d47' : '',
      };
    },
  };


  return (
    <BaseSelect
      closeMenuOnSelect={true}
      onMenuOpen={handleOpen}
      onMenuClose={handleClose}
      className={cn(s.select, className)}
      options={options}
      value={value}
      defaultValue={options[0]}
      onChange={onChange}
      placeholder={placeholder}
      hideSelectedOptions={true}
      components={{
        DropdownIndicator,
        Option,
        SingleValue,
        MenuList
      }}
      isDisabled={isDisabled}
      isSearchable={false}
      styles={backgroundStyles}
    />
  )
}

