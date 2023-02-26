import { FC } from 'react'
import {
  Button,
  Heading,
  ItemSmallCard,
  ItemSliderWide,
  Slider,
} from 'components'
import MediumRed from '/public/assets/img/button/MediumRed.svg'
import GreenMediumPlay from '/public/assets/img/button/GreenMediumPlay.svg'
import NftsGreenMobileBtn from '/public/assets/img/button/NftsGreenMobileBtn.svg'
import NftsRedMobileBtn from '/public/assets/img/button/NftsRedMobileBtn.svg'

import s from './gameNftsSection.module.scss'
import cn from 'classnames'
import { ItemCardProps } from 'components/ItemCard/ItemCard'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface PropsGameNftsSection {
  items: ItemCardProps[]
}

export const GameNftsSection: FC<PropsGameNftsSection> = ({ items }) => {
  const breakPoints = {
    992: {
      width: 992,
      slidesPerView: 2,
      initialSlide: 2,
      spaceBetween: 50,
      centeredSlides: false,
    },
    1200: {
      width: 1200,
      slidesPerView: 3,
      initialSlide: 2,
      centeredSlides: true,
    },
    1900: {
      width: 1900,
      slidesPerView: 5.5,
      initialSlide: Math.floor(items.length / 2),
      centeredSlides: true,
    },
  }

  const { push } = useRouter()
  return (
    <section className={s.inner} id='nfts'>
      <div className={cn(s.wrapper, s.line)}>
        <div className={s.container}>
          <h1 className={s.title}>game nft&apos;s</h1>
          <Heading
            whiteText={'And start earning right now!'}
            greenText={'Choose your NFT'}
            isGreenTop={true}
            textAlign={'center'}
          />
        </div>
        <div className={s.slider}>
          <Slider
            withNavigation={false}
            withPagination={true}
            centeredSlides={true}
            slidesPerView={1}
            breakpoints={breakPoints}
          >
            {items.map(item => {
              return (
                <div key={item.id} className={s.container}>
                  <ItemSmallCard
                    id={item.id}
                    rarity={item.rarity}
                    price={item.price}
                    level={item.level}
                    productivity={item.productivity}
                    hash={item.hash}
                    image={item.image}
                    key={item.id}
                  />
                </div>
              )
            })}
          </Slider>
        </div>
        <div className={s.container}>
          <div className={s.desktopBtns}>
            <Button
              label='MARKETPLACE'
              className={s.deskMarketplace}
              onClick={() => push('marketplace/buy-nft')}
            >
              <MediumRed />
            </Button>

            <Button label='PLAY' className={s.desktPlayGame}>
              <GreenMediumPlay />
            </Button>
          </div>
          <div className={s.mobileBtns}>
            <Button
              label='MARKETPLACE'
              className={s.mobileMarketplace}
              onClick={() => push('marketplace/buy-nft')}
            >
              <NftsRedMobileBtn />
            </Button>
            <Button label='PLAY' className={s.mobilePlayGame}>
              <NftsGreenMobileBtn />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
