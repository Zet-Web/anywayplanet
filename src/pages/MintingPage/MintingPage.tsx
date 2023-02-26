import { FC } from 'react'
import { useAppSelector } from '../../shared/hooks/redux'

import Image from 'next/image'
import { MintingSection } from 'features'
import { AccountHeading, Background, MintingFilterTabs } from 'components'

import bg from '/public/assets/img/marketplaceBackground.png'
import planet from '/public/assets/img/mintingPageBgPlanet1.png'
import planet2 from '/public/assets/img/mintingPageBgPlanet2.png'

import { mockMintingResources } from '../../shared/mocks/resourcesMintingPage'

import s from './mintingPage.module.scss'

export const MintingPage: FC = () => {
  const { activeTab } = useAppSelector(state => state.mintingActiveTab)
  return (
    <div className={s.wrapper}>
      <div className={s.bg}>
        <Image src={bg} alt='background' />
      </div>
      <div className={s.imgPlanet}>
        <Image src={planet} alt='background' />
      </div>
      <div className={s.imgPlanet2}>
        <Image src={planet2} alt='background' />
      </div>
      <Background />
      <div className={s.bodyWrapper}>
        <AccountHeading title='Minting' />
        <div className={s.text}>
          <p className={s.descrText}>
            Minting is the creation a new NFT using a pair of existing{' '}
            <span className={s.resText}>level 10 NFTs.</span> Choose the rarity
            of your NFTs, select your NFTs and pay for the generation process.
          </p>
          <span className={s.resText}>
            Result: +1 NFT of the same rarity or Mint Box (multiple NFTs)
          </span>
        </div>

        <MintingFilterTabs tabs={mockMintingResources} />
        <div className={s.yourNftWrapper}>
          <MintingSection activeTab={activeTab} />
        </div>
      </div>
    </div>
  )
}
