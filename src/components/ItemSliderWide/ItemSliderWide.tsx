import { FC } from 'react'
import Image, { ImageProps } from 'next/image'
import s from './itemSliderWide.module.scss'

interface ItemSliderWideProps {
  image: ImageProps['src']
}
export const ItemSliderWide: FC<ItemSliderWideProps> = ({ image }) => {
  return <div className={s.wrapper}>{image ? <Image src={image} /> : null}</div>
}
