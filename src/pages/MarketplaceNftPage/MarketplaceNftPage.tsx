import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { CardCatalog } from 'features'
import { FilterTabs, LazyLoadingButton } from 'components'
import { LinkType } from 'shared/types'
import { mockCatalogCards } from 'shared/mocks/card'
import { mockResources } from 'shared/mocks/resources'
import TetherIcon from '/public/assets/icons/tetherUsdtLogo.svg'
import halfLeftPlanet from '/public/assets/img/halfLeftPlanet.png'
import halfRightPlanet from '/public/assets/img/halfRightPlanet.png'
import s from './marketplaceNftPage.module.scss'

const linksList: LinkType[] = [
  {
    link: '/buy-nft',
    label: 'Buy NFT',
  },
  {
    link: '/nft',
    label: 'NFT',
  },
  {
    link: '/resources',
    label: 'Resources',
  },

  {
    link: '/bonuses',
    label: 'Bonuses',
  },
  {
    link: '/minting',
    label: 'Minting',
  },
]

export const MarketplaceNftPage: FC = () => {
  const [cards, setCards] = useState(mockCatalogCards)
  const [showCardCount, setShowCardCount] = useState<number>(12)

  const lazyLoadingBtnClickHandler = () => {
    setShowCardCount(showCardCount + 4)
  }

  useEffect(() => {
    setCards(mockCatalogCards.slice().slice(0, showCardCount))
  }, [showCardCount])
  return (
    <div className={s.nftWrapper}>
      <div className={s.rightImg}>
        <Image width={600} height={600} src={halfRightPlanet.src} />
      </div>
      <div className={s.leftImg}>
        <Image width={700} height={700} src={halfLeftPlanet.src} />
      </div>
      <main className={s.mainWrapper}>
        <div className={s.titleWrapper}>
          <h1 className={s.title}>
            Personal backoffice
            <span className={s.titleSmallText}> / NFT</span>
            <br />
            <span className={s.titleBigText}>NFT</span>
          </h1>
        </div>
        <div className={s.totalWrapper}>
          <TetherIcon />
          <div className={s.totalNum}>1.357.23</div>
          <h2 className={s.totalTitle}>Total capitalization</h2>
        </div>
        <div className={s.wrapperFilterItems}>
          <FilterTabs tabs={mockResources} />
        </div>
        <div className={s.nftPlacedWrapper}>
          <div className={s.titleNft}>
            NFT placed <span className={s.titleGreen}>in the game</span>
          </div>
          {/* @ts-ignore */}
          <CardCatalog cards={mockCatalogCards} />
        </div>
        <div className={s.nftPlacedWrapper}>
          <div className={s.titleNft}>
            NFT placed <span className={s.titleGreen}>in inventory</span>
          </div>
          {/* @ts-ignore */}
          <CardCatalog cards={mockCatalogCards} />
        </div>
        {showCardCount < mockCatalogCards.length && (
          <LazyLoadingButton onClick={lazyLoadingBtnClickHandler} />
        )}
      </main>
    </div>
  )
}
