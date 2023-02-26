import Image from 'next/image'
import {
  AboutGame,
  AssembleTeamSection,
  DustributeSection,
  Footer,
  GameNftsSection,
  HeroBlockSection,
  SectionRoadmap,
  Tokens,
  UpgradeFeature,
} from 'features'
import { FC } from 'react'
import img from '/public/assets/accent.png'
import img2 from '/public/assets/accent2.png'
import s from './homePage.module.scss'
import { mockCatalogCards } from 'shared/mocks/card'

export const HomePage: FC = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.bg1}>
        {' '}
        <Image src={img} />{' '}
      </div>
      <div className={s.bg}>
        {' '}
        <Image src={img2} />{' '}
      </div>
      <HeroBlockSection />
      <AboutGame />
      <DustributeSection />
      <UpgradeFeature />
      <AssembleTeamSection />
      <GameNftsSection items={mockCatalogCards} />
      <Tokens />
      <SectionRoadmap />
    </div>
  )
}
