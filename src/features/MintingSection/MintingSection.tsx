import { FC, useState } from 'react'
import {
  Button,
  MintingCurrencyTabs,
  MintingFileChooser,
  Tags,
} from 'components'

import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { RarityTag, CurrencyType } from 'shared/types'

import MediumCurrentUsdt from '/public/assets/img/button/MediumCurrentUsdt.svg'
import MediumCurrentWater from '/public/assets/img/button/MediumCurrentWater.svg'
import MediumCurrentEnergy from '/public/assets/img/button/MediumCurrentEnergy.svg'
import MediumCurrentOxygen from '/public/assets/img/button/MediumCurrentOxygen.svg'
import SmallCurrentUsdt from '/public/assets/img/button/SmallCurrentUsdt.svg'
import SmallCurrentEnergy from '/public/assets/img/button/SmallCurrentEnergy.svg'
import SmallCurrentWater from '/public/assets/img/button/SmallCurrentWater.svg'
import SmallCurrentOxygen from '/public/assets/img/button/SmallCurrentOxygen.svg'

import { TABLET_MAX_SCREEN } from 'shared/constants/screenResolutions'

import { mockSelectCurrencyTabs } from 'shared/mocks/mockSelectCurrency'
import { mockTags } from 'shared/mocks/tags'

import s from './mintingSection.module.scss'

interface MintingSectionProps {
  activeTab: number
}

const currencyTab = (activeTab: number) => {
  switch (true) {
    case activeTab === 0:
      return CurrencyType.Oxygen
    case activeTab === 1:
      return CurrencyType.Water
    case activeTab === 2:
      return CurrencyType.Energy
    case activeTab === 3:
      return CurrencyType.Minerals
    default:
      return CurrencyType.Usdt
  }
}

export const MintingSection: FC<MintingSectionProps> = ({ activeTab }) => {
  const [rarity, setRarity] = useState<RarityTag | null>(null)
  const { width } = useWindowDimensions()

  const currencyType = currencyTab(activeTab)
  const tagsButtonClickHandler = (tag: string) => {
    if (rarity !== tag) {
      setRarity(tag as RarityTag)
    } else {
      setRarity(null)
    }
  }

  return (
    <section className={s.mintingSection}>
      <div className={s.stageWrapper}>
        <div className={s.stageHeadingWrapper}>
          <h3 className={s.stageHeading}>
            Choose{width < 536 ? <br /> : ' '}your NFT
          </h3>
          <p className={s.stageNumber}>01</p>
        </div>

        <Tags
          tags={mockTags}
          onClick={tagsButtonClickHandler}
          rarity={rarity}
          className={s.tags}
          
        />
      </div>

      <div className={s.stageWrapper}>
        <div className={s.stageHeadingWrapper}>
          <h3 className={s.stageHeading}>
            Choose the{width < 536 ? <br /> : ' '}rarity of
            {width < 536 ? <br /> : ' '}your NFT
          </h3>
          <p className={s.stageNumber}>02</p>
        </div>

        <div className={s.fileChooserWrapper}>
          <MintingFileChooser rarity={rarity} currencyType={currencyType} />
          <MintingFileChooser rarity={rarity} currencyType={currencyType} />
        </div>
      </div>

      <div className={s.stageWrapper}>
        <div className={s.stageHeadingWrapper}>
          <h3 className={s.stageHeading}>
            Choose your{width < 536 ? <br /> : ' '}payment method
          </h3>
          <p className={s.stageNumber}>03</p>
        </div>

        <MintingCurrencyTabs
          price={85000}
          tabs={mockSelectCurrencyTabs}
          currencyType={currencyType}
        />

        <div className={s.startMintingButtonWrapper}>
          <Button label={`START MINTING`} className={s.startMintingButton}>
            {width < TABLET_MAX_SCREEN ? (
              <>
                {currencyType === 'usdt' && <SmallCurrentUsdt />}
                {currencyType === 'water' && <SmallCurrentWater />}
                {currencyType === 'energy' && <SmallCurrentEnergy />}
                {currencyType === 'oxygen' && <SmallCurrentOxygen />}
              </>
            ) : (
              <>
                {currencyType === 'usdt' && <MediumCurrentUsdt />}
                {currencyType === 'water' && <MediumCurrentWater />}
                {currencyType === 'energy' && <MediumCurrentEnergy />}
                {currencyType === 'oxygen' && <MediumCurrentOxygen />}
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  )
}
