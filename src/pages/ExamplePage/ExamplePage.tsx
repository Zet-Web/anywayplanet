import { FC, useState } from 'react'
import {
  CardInfo,
  Footer,
  Header,
  ResourceDashboard,
  SelectCurrencyTabs,
  MarketPlaceHeader,
  ChoosePaymentModal,
  UpgradeFeature,
  WithdrawFundsModal,
  GameNftsSection,
  TransferFundsModal,
} from 'features'

import { AboutGame, AssembleTeamSection, HeroBlockSection } from 'features'
import { ResourcesTable } from '../../features/ResourcesTable/ResourcesTable'
import {
  Button,
  ExampleWrapper,
  Heading,
  ItemCard,
  Range,
  AccountHeading,
  Tabs,
  Tags,
  FilterTabs,
  ComponentWrapper,
  Input,
  Modal,
  Slider,
  ItemSlider,
  FilterWrapper,
} from 'components'
import heading1 from '../../../public/assets/img/heading_1.png'
import fox from '/public/assets/img/button/foxIcon.png'
import bg from '/public/assets/img/button/greenButtonIcon.png'
import GreenPlayButton from '/public/assets/img/button/GreenPlayButton.svg'
import MediumBlue from '/public/assets/img/button/MediumBlue.svg'
import MediumBoldGreen from '/public/assets/img/button/MediumBoldGreen.svg'
import MediumGreen from '/public/assets/img/button/MediumGreen.svg'
import MediumGreyMix from '/public/assets/img/button/MediumGreyMix.svg'
import MediumLightYellow from '/public/assets/img/button/MediumLightYellow.svg'
import MediumRed from '/public/assets/img/button/MediumRed.svg'
import MediumYellow from '/public/assets/img/button/MediumYellow.svg'
import SmallGreen from '/public/assets/img/button/SmallGreen.svg'
import SmallYellow from '/public/assets/img/button/SmallYellow.svg'
import thunder from '/public/assets/img/button/thunderIcon.png'
import GreenMediumPlay from '/public/assets/img/button/GreenMediumPlay.svg'
import NftImage from '/public/assets/img/NftImage.png'
import NftImage2 from '/public/assets/img/NftImage2.png'
import NftImage3 from '/public/assets/img/NftImage3.png'

import { mockMarketPlaceHeaderItems } from 'shared/mocks'
import { mockTags } from 'shared/mocks/tags'
import { mockTabs } from 'shared/mocks/tabs'
import { mockHeaderMenuItems } from 'shared/mocks'
import { mockCatalogCards } from 'shared/mocks/card'
import { optionsNet, optionsResource } from 'shared/mocks/selectOptions'
import { mockResources } from 'shared/mocks/resources'
import { mockSelectCurrencyTabs } from 'shared/mocks/mockSelectCurrency'
import {
  mockRecourcesBalanceCard,
  mockRecourcesTokenCard,
} from 'shared/mocks/mockResources'
import { mockWithdrawFundsModal } from 'shared/mocks/mockWithdrawFundsModal'
import { mockTransferFundsModal } from 'shared/mocks/mockTransferFundsModal'

import s from './examplePage.module.scss'
import { RarityTag } from 'shared/types'
import { Select } from 'components/Select/Select'
import { resourcesMain, resourcesTabs } from '../../shared/mocks/resourcesTabs'

export const ExamplePage: FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const [isSelectPaymentOpen, setIsSelectPaymentOpen] = useState(false)
  const [isWithdrawFundsModalOpen, setIsWithdrawFundsModalOpen] =
    useState(false)
  const [isTransferFundsModalOpen, setIsTransferFundsModalOpen] =
    useState(false)
  return (
    <>
      <ExampleWrapper title='' isDark>
        <ExampleWrapper title={'Game Nft Section'} isDark>
          <GameNftsSection items={mockCatalogCards} />
        </ExampleWrapper>
        <ExampleWrapper title='Resource Dashboard' isDark>
          <ResourceDashboard
            balanceCards={mockRecourcesBalanceCard}
            tokenCards={mockRecourcesTokenCard}
          />
        </ExampleWrapper>
        <ExampleWrapper title='ResourcesTable:' isDark>
          <ResourcesTable
            label={'transactions history'}
            resourcesTabs={resourcesTabs}
            resourcesMain={resourcesMain}
          />
        </ExampleWrapper>
        <ExampleWrapper title='AccountHeading' isDark>
          <AccountHeading title='Resources' />
        </ExampleWrapper>
        <ExampleWrapper title='Heading' isDark>
          <Heading
            whiteText={'GET AND DISTRIBUTE'}
            greenText={'RESOURCES'}
            icon={heading1}
            isGreenTop={false}
            textAlign={'left'}
          />
        </ExampleWrapper>
        <ExampleWrapper title='Range' isDark>
          <Range
            max={1000}
            min={0}
            step={1}
            numbers={[0, 1000]}
            variant={'price'}
          />
          <Range
            max={100}
            min={0}
            step={1}
            numbers={[0, 100]}
            variant={'level'}
          />
        </ExampleWrapper>
        <ExampleWrapper title='Tags' isDark>
          <ComponentWrapper label='rarity'>
            <Tags tags={mockTags} rarity={RarityTag.Legend} />
          </ComponentWrapper>
        </ExampleWrapper>
        <ExampleWrapper title='Buttons' isDark>
          <Button label='SIGN UP'>
            <SmallGreen />
          </Button>
          <Button label='LOG IN'>
            <SmallYellow />
          </Button>
          <Button label='PLAY' className={s.playBtn}>
            <GreenPlayButton />
          </Button>
          <Button label='PLAY' className={s.playBtn}>
            <GreenMediumPlay />
          </Button>
          <Button label='LOG IN' className={s.customBoldGreen}>
            <MediumBoldGreen />
          </Button>
          <Button label='START MINTING' className={s.custom}>
            <MediumBlue />
          </Button>
          <Button label='START MINTING' className={s.custom}>
            <MediumLightYellow />
          </Button>
          <Button label='PLAY' className={s.custom}>
            <MediumGreen />
          </Button>

          <Button
            label='BUY FOR ENERGY'
            className={s.custom}
            icon={thunder.src}
          >
            <MediumYellow />
          </Button>
          <Button label='BUY FOR USDT' className={s.custom} icon={bg.src}>
            <MediumGreen />
          </Button>
          <Button label='METAMASK' className={s.custom} icon={fox.src}>
            <MediumGreyMix />
          </Button>
          <Button label='MARKETPLACE' className={s.customRed}>
            <MediumRed />
          </Button>
        </ExampleWrapper>
        <ExampleWrapper isDark title='Tabs'>
          <Tabs tabs={mockTabs} />
        </ExampleWrapper>
        <ExampleWrapper title='SelectCurrency tabs' isDark>
          <SelectCurrencyTabs mockSelectCurrencyTabs={mockSelectCurrencyTabs} />
        </ExampleWrapper>
        <ExampleWrapper title='Choose Payment Modal' isDark>
          <Button
            label='OPEN PAYMENT MODAL'
            className={s.playBtn}
            onClick={() => setIsSelectPaymentOpen(prev => !prev)}
          >
            <GreenPlayButton />
          </Button>
          <Modal
            isOpen={isSelectPaymentOpen}
            onClose={() => setIsSelectPaymentOpen(prev => !prev)}
            isClosable
          >
            <ChoosePaymentModal />
          </Modal>
        </ExampleWrapper>
        <ExampleWrapper title='Filter tabs' isDark>
          <FilterTabs tabs={mockResources} />
        </ExampleWrapper>
        <ExampleWrapper title='Select' isDark>
          <div style={{ display: 'flex', padding: '0 15px' }}>
            <Select options={optionsResource} variant='resource' />
            <Select
              options={optionsNet}
              variant='net'
              placeholder='Choose the net'
            />
          </div>
        </ExampleWrapper>
        <ExampleWrapper title='Input' isDark>
          <Input
            type='text'
            value={inputValue}
            onChange={setInputValue}
            label='Your name'
          />
          <Input
            type='password'
            value={inputValue}
            onChange={setInputValue}
            label='Password'
            iconType='password'
            onIconClick={() => console.log('icon click worked')}
          />
          <Input
            type='text'
            value={inputValue}
            onChange={setInputValue}
            label='Rewrite'
            iconType='rewrite'
            onIconClick={() => console.log('icon click worked')}
          />
          <Input
            type='text'
            value={inputValue}
            onChange={setInputValue}
            label='Enter amount'
            button='withdraw all'
            onButtonClick={() => console.log('button click worked')}
          />
        </ExampleWrapper>
        <ExampleWrapper title='Transfer Funds Modal' isDark>
          <Button
            label='OPEN TRANSFER FUNDS MODAL'
            className={s.playBtn}
            onClick={() => setIsTransferFundsModalOpen(true)}
          >
            <GreenPlayButton />
          </Button>

          <Modal
            isOpen={isTransferFundsModalOpen}
            onClose={() => setIsTransferFundsModalOpen(prev => !prev)}
          >
            <TransferFundsModal
              onClose={() => setIsTransferFundsModalOpen(false)}
              resources={optionsResource}
              {...mockTransferFundsModal}
            />
          </Modal>
        </ExampleWrapper>
        <ExampleWrapper title='Withdraw Funds Modal' isDark>
          <Button
            label='OPEN WITHDRAW FUNDS MODAL'
            className={s.playBtn}
            onClick={() => setIsWithdrawFundsModalOpen(true)}
          >
            <GreenPlayButton />
          </Button>
          <WithdrawFundsModal
            isOpen={isWithdrawFundsModalOpen}
            onClose={() => setIsWithdrawFundsModalOpen(false)}
            {...mockWithdrawFundsModal}
          />
        </ExampleWrapper>
      </ExampleWrapper>
    </>
  )
}
