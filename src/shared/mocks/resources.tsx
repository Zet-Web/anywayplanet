import { FilterTabProps } from 'components/FilterTabs/FilterTab/FilterTab'

import All from '/public/assets/icons/resources/all.svg'
import Energy from '/public/assets/icons/resources/energy.svg'
import Plot from '/public/assets/icons/resources/landPlots.svg'
import Minerals from '/public/assets/icons/resources/minerals.svg'
import Oxygen from '/public/assets/icons/resources/oxygen.svg'
import Skin from '/public/assets/icons/resources/skin.svg'
import Water from '/public/assets/icons/resources/water.svg'

export const mockResources: Omit<FilterTabProps, "active">[] = [
  {
    icon: <All />,
    label: 'all',
    count: 27,
  },
  {
    icon: <Plot />,
    label: 'land plots',
    count: 3,
  },
  {
    icon: <Oxygen />,
    label: 'oxygen',
    count: 8,
  },
  {
    icon: <Water />,
    label: 'water',
    count: 2,
  },
  {
    icon: <Energy />,
    label: 'energy',
    count: 5,
  },
  {
    icon: <Minerals />,
    label: 'minerals',
    count: 5,
  },
  {
    icon: <Skin />,
    label: 'skins',
    count: 2,
  },
]
