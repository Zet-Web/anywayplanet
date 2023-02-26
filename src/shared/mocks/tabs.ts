import { TabItemProps } from 'components/TabItem/TabItem'
import allIcon from '/public/assets/icons/tabs/all.svg'
import plotsIcon from '/public/assets/icons/tabs/plots.svg'
import oxygenIcon from '/public/assets/icons/tabs/oxygen.svg'
import waterIcon from '/public/assets/icons/tabs/water.svg'
import energyIcon from '/public/assets/icons/tabs/energy.svg'
import mineralsIcon from '/public/assets/icons/tabs/minerals.svg'
import skinsIcon from '/public/assets/icons/tabs/skins.svg'

export const mockTabs: TabItemProps[] = [
  {
    label: 'all',
    icon: allIcon,
  },
  {
    label: 'oxygen',
    icon: oxygenIcon,
  },
  {
    label: 'water',
    icon: waterIcon,
  },
  {
    label: 'energy',
    icon: energyIcon,
  },
  {
    label: 'minerals',
    icon: mineralsIcon,
  },
  {
    label: 'land plots',
    icon: plotsIcon,
    isDisable: true,
  },
  {
    label: 'skins',
    icon: skinsIcon,
    isDisable: true,
    multiline: ['first line', 'second line', 'third line'],
  },
]
