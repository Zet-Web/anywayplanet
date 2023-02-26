import { FC } from 'react'

import assembleTeamLogo from '../../../public/assets/icons/assembleTeamLogo.png'
import { Heading } from '../../components/Heading/Heading'

import s from './assembleTeamSection.module.scss'

export const AssembleTeamSection: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.outline} />
      <div className={s.imgPlanet} />
      <div className={s.container}>
        <div className={s.imgSection} />
        <div className={s.firstClass}>
          <div className={s.lastClass} />
        </div>
        <div className={s.wrapperLast}>
          <div className={s.logoSection}>
            <Heading
              whiteText={'ASSEMBLE AND'}
              greenText={'DEVELOP YOUR TEAM'}
              icon={assembleTeamLogo}
              isGreenTop={false}
            />
          </div>
          <div className={s.descriptionText}>
            <p>
              The game has a special game mode for team play &quot;Team
              Play&quot;.
            </p>
            <br />
            <p>
              You can earn up to 10% commission on NFT sales and up to 50% on
              the generation of all liquid resources in your team. You can also
              complete joint missions to explore the planet and share the
              rewards and items received during the tasks. For convenience, the
              game will have a general chat with the possibility of team
              communication.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
