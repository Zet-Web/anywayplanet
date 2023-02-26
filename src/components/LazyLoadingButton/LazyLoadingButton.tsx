import { FC } from 'react'
import { Button } from 'components'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import { TABLET_MAX_SCREEN } from 'shared/constants/screenResolutions'
import LazyLoadButton from '/public/assets/img/button/LazyLoadButton.svg'
import LazyLoadButtonSmall from '/public/assets/img/button/LazyLoadButtonSmall.svg'
import s from './layzyLoadingButton.module.scss'

interface LazyLoadingButtonProps {
  onClick: () => void
}

export const LazyLoadingButton: FC<LazyLoadingButtonProps> = ({ onClick }) => {
  const { width } = useWindowDimensions()

  return (
    <div className={s.lazyLoadingBtnWrapper}>
      {width >= TABLET_MAX_SCREEN ? (
        <Button
          label='LOAD MORE NFT'
          className={s.lazyLoadingBtn}
          onClick={onClick}
        >
          <LazyLoadButton />
        </Button>
      ) : (
        <Button
          label='LOAD MORE NFT'
          className={s.lazyLoadButtonSmall}
          onClick={onClick}
        >
          <LazyLoadButtonSmall />
        </Button>
      )}
    </div>
  )
}
