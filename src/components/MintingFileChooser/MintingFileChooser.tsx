import {
  DetailedHTMLProps,
  FC,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'
import cn from 'classnames'
import {
  MintingFileChooserBackground,
  MintingFileChooserIcon,
} from 'components'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { RarityTag, CurrencyType } from 'shared/types'
import s from './mintingFileChooser.module.scss'

interface MintingFileChooserProps {
  rarity: RarityTag | null
  currencyType: CurrencyType
  className?: string
  props?: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
}

export const MintingFileChooser: FC<MintingFileChooserProps> = ({
  rarity,
  currencyType,
  className,
  props,
}) => {
  const [rarityShadowColor, setRarityShadowColor] = useState('')
  const [currencyTypeShadowColor, setCurrencyTypeShadowColor] = useState('')
  const [currencyTypeColor, setCurrencyTypeColor] = useState('')
  const { width } = useWindowDimensions()
  useEffect(() => {
    switch (rarity) {
      case RarityTag.Normal:
        setRarityShadowColor('0 0 0 0 0.320 0 0 0 0 1 0 0 0 0 0 0 0 0 0.8 0')
        break
      case RarityTag.Rare:
        setRarityShadowColor(' 0 0 0 0 0 0 0 0 0 0.76 0 0 0 0 1 0 0 0 0.8 0')
        break
      case RarityTag.Epic:
        setRarityShadowColor('0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.8 0')
        break
      case RarityTag.Legend:
        setRarityShadowColor('0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.541176 0 0 0 0.8 0')
        break
    }
  }, [rarity])

  useEffect(() => {
    switch (currencyType) {
      case CurrencyType.Oxygen:
        setCurrencyTypeShadowColor(
          '0 0 0 0 0 0 0 0 0 0.76 0 0 0 0 1 0 0 0 0.8 0'
        )
        setCurrencyTypeColor('#00c2ff')
        break
      case CurrencyType.Water:
        setCurrencyTypeColor('#2260ff')
        setCurrencyTypeShadowColor(
          '0 0 0 0 0.13 0 0 0 0 0.38  0 0 0 0 1 0 0 0 0.8 0'
        )
        break
      case CurrencyType.Energy:
        setCurrencyTypeShadowColor(
          '0 0 0 0 1 0 0 0 0 0.9 0 0 0 0 0 0 0 0 0.8 0'
        )
        setCurrencyTypeColor('#ffe500')
        break
      case CurrencyType.Minerals:
        setCurrencyTypeShadowColor(
          '0 0 0 0 1 0 0 0 0 0 0 0 0 0 0.541176 0 0 0 0.8 0'
        )
        setCurrencyTypeColor('#ff008a')
        break
    }
  }, [currencyType])

  return (
    <label className={cn(s.wrapper, className)}>
      <input type='file' {...props} className={s.visuallyHidden} />
      <MintingFileChooserBackground
        rarity={rarity}
        rarityShadowColor={rarityShadowColor}
      />
      <MintingFileChooserIcon
        currencyTypeColor={currencyTypeColor}
        currencyTypeShadowColor={currencyTypeShadowColor}
      />
      <p className={cn(s.title, s[currencyType])}>
        Place the <span>1st</span>{width < 536 ? <br /> : " "}NFT for{width < 536 ? <br /> : " "}minting
      </p>
    </label>
  )
}
