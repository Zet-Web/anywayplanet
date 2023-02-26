import Image from 'next/image'
import { FC } from 'react'

import distributeLogo from '../../../public/assets/icons/distributeLogo.png'
import distributePlanet from '/public/assets/img/distributePlanet.png'
import { Heading } from '../../components/Heading/Heading'

import s from './distributeSection.module.scss'

export const DustributeSection: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.outline} />
      <div className={s.imgPlanet}>
        <Image src={distributePlanet} />
      </div>
      <div className={s.container}>
        <div className={s.imgSection} />
        <div className={s.firstClass}>
          <div className={s.lastClass} />
        </div>
        <div className={s.wrapperLast}>
          <div className={s.logoSection}>
            <Heading
              whiteText={'GET AND DISTRIBUTE'}
              greenText={'RESOURCES'}
              icon={distributeLogo}
              isGreenTop={false}
            />
          </div>
          <div className={s.descriptionText}>
            <p>
              The key objects of the game are backed by the NFT asset. Placing
              NFTs on the map gives you market resources — water, oxygen, ore
              and energy. You can exchange these for tokens.
            </p>

            <br />
            <p>
              Be careful when allocating resources, because even the slightest
              mistake in the calculations can lead to the death of the colony if
              you run out of oxygen!
            </p>
            <br />
            <p>
              Combining all liquid resources allows you to get access to
              territories of the Exoplanet
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
