import { FC, useState } from 'react'
import Image from 'next/image'
import { Button } from 'components'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'
import bg from '/public/assets/img/button/greenButtonIcon.png'
import MediumGreen from '/public/assets/img/button/MediumGreen.svg'
import SmallMediumGreen from '/public/assets/img/button/SmallMediumGreen.svg'
import icon1 from '/public/assets/img/chooseModalIcon1.png'
import icon2 from '/public/assets/img/chooseModalIcon2.png'
import icon3 from '/public/assets/img/chooseModalIcon3.png'
import icon4 from '/public/assets/img/chooseModalIcon4.png'
import cn from 'classnames'
import s from './choosePaymentModal.module.scss'

interface PaymentItemList {
  id: number
  title: string
  icon: string
}

const paymetItemList: PaymentItemList[] = [
  {
    id: 0,
    title: 'USDT TRC-20',
    icon: icon1.src,
  },
  {
    id: 1,
    title: 'TRX TRC-20',
    icon: icon2.src,
  },
  {
    id: 2,
    title: 'USDT BEP-20',
    icon: icon3.src,
  },
  {
    id: 3,
    title: 'BNB BEP-20',
    icon: icon4.src,
  },
]

export const ChoosePaymentModal: FC = () => {
  const [isActive, setIsActive] = useState<number>(0)

  const { width } = useWindowDimensions()

  return (
    <div className={s.paymentCard}>
      <div className={s.topLine}>
        <div className={s.topLineInner}></div>
      </div>
      <div className={s.bottomLine}>
        <div className={s.bottomLineInner}></div>
      </div>
      <div className={s.leftLine}>
        <div className={s.leftLineInner}></div>
      </div>
      <div className={s.rightLine}>
        <div className={s.rightLineInner}></div>
      </div>
      <div className={s.title}>CHOOSE A PAYMENT SYSTEM</div>
      <div className={s.paymentItemWrapper}>
        {paymetItemList.map(item => (
          <div
            onClick={() => setIsActive(item.id)}
            key={item.id}
            className={cn(
              s.paymentItem,
              item.id === isActive && s.active
            )}
          >
            <Image
              alt={item.title}
              width={63}
              height={44}
              src={item.icon}
            />
            {item.title}
          </div>
        ))}
      </div>
      <div className={s.buttonWrapper}>
        <Button
          className={s.custom}
          label='CREATE AN INVOICE'
          icon={width > 768 ? bg.src : ''}
        >
          {width > 768 ? <MediumGreen /> : <SmallMediumGreen />}
        </Button>
      </div>
    </div>
  )
}
