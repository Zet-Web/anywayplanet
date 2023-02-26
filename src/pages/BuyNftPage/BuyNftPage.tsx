import Image, { ImageProps } from 'next/image'
import { FC, useEffect, useState } from 'react'
import s from './buyNftPage.module.scss'
import { FilterWrapper, LazyLoadingButton, Modal } from 'components'
import planet from '/public/assets/img/marketplaceBgPlanet.png'
import planet2 from '/public/assets/img/marketplaceBgPlanet2.png'
import { CardCatalog, CardInfo } from 'features'
import { getMarketItems } from 'shared/api/routes/marketItems'
import { ItemCardProps } from 'components/ItemCard/ItemCard'
import { useFilteredCards } from 'shared/hooks/useFilteredCards'
import { useAppSelector } from 'shared/hooks/redux'

export const BuyNftPage: FC = () => {
  const { cards, isLoading, handleFilters, handleMoreImage, next, filters } =
    useFilteredCards()
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  // const [id, setId] = useState<number | undefined>()

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  // useEffect(() => {
  //   const loadProducer = async () => {
  //     try {
  //       const { data: marketItems } = await getMarketItems()
  //       setCards(marketItems)
  //     } catch (error) {
  //       console.error(error)
  //     }
  //   }
  //   loadProducer()
  // }, [])

  // const lazyLoadingBtnClickHandler = () => {
  //   setIsLoading(true)
  //   setTimeout(() => {
  //     setCards([...cards, ...cards.slice(0, 4)])
  //     setIsLoading(false)
  //   }, 500)
  // }
  // console.log(cards)
  console.log(cards)

  let state = useAppSelector(state => state.selectedCard)
  console.log(state)

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(prev => !prev)}
        className={s.modalWrapper}
        contentClassName={s.modalContentWrapper}
      >
        <CardInfo
          {...state.selectedCard}
          key={0}
          onClose={() => setIsModalOpen(prev => !prev)}
        />
      </Modal>
      <div className={s.wrapper}>
        <div className={s.imgPlanet}>
          <Image src={planet} alt='background' />
        </div>
        <div className={s.imgPlanet2}>
          <Image src={planet2} alt='background' />
        </div>
        <FilterWrapper handleFilters={handleFilters} filters={filters} />

        <div className={s.cardCatalogWrapper}>
          <CardCatalog cards={cards} onItemClick={handleOpenModal} />
        </div>

        {!isLoading && cards.length > next ? (
          <LazyLoadingButton onClick={handleMoreImage} />
        ) : cards.length > next ? (
          <div className={s.loading}>LOADING...</div>
        ) : null}
      </div>
    </>
  )
}
