import { FC } from 'react'
import { Heading } from 'components'
import upgradeFeatureLogo from '../../../public/assets/img/upgradeFeatureLogo.png'

import s from './UpgradeFeature.module.scss'
import cn from 'classnames'

export const UpgradeFeature: FC = () => {
  return (
    <section className={s.inner}>
      <div className={cn(s.wrapper, s.line)}>
        <div className={s.container}>
          <div className={s.heading}>
            <Heading
              textAlign='center'
              whiteText={'UPGRADE THE OBJETCS'}
              greenText={'TO IMPROVE THEIR FEATURES'}
              icon={upgradeFeatureLogo}
              isGreenTop={false}
            />
          </div>
          <div className={s.flex}>
            <div className={s.photo}>
              <div className={s.background}></div>
            </div>
            <div className={s.description}>
              <div className={s.text}>
                <p>
                  There are 10 upgrade levels available for each NFT asset, each
                  providing an increase in the amount of resources you receive.
                </p>
                <br />
                <p>
                  Depending on the rarity of the NFT, level 10 buildings can be
                  101% more profitable than level 1 buildings, and in-game items
                  can have unique features.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
