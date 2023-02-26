import { FC } from 'react'
import Image from 'next/image'
import { ResourceDashboard } from 'features'
import { ResourcesTable } from 'features/ResourcesTable/ResourcesTable'
import {
    mockRecourcesBalanceCard,
    mockRecourcesTokenCard,
} from 'shared/mocks/mockResources'
import { resourcesMain, resourcesTabs } from '../../shared/mocks/resourcesTabs'
import AssembleTeamPlanet from '/public/assets/img/assembleTeamPlanet.png'
import Planet from '/public/assets/img/planet.png'
import s from './resourcesPage.module.scss'


export const ResourcesPage: FC = () => {
    return (
        <div className={s.resourcesWrapper}>
            <div className={s.topImage}><Image src={AssembleTeamPlanet} alt='img' /></div>
            <div className={s.bottomImage}><Image src={Planet} alt='img' /></div>
            <main className={s.mainWrapper}>
                <ResourceDashboard
                    balanceCards={mockRecourcesBalanceCard}
                    tokenCards={mockRecourcesTokenCard}
                />
                <div className={s.resourcesTable}>
                    <ResourcesTable
                        label={'transactions history'}
                        resourcesTabs={resourcesTabs}
                        resourcesMain={resourcesMain}
                    />
                </div>
            </main>
        </div>
    )
}
