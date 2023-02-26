import Energy from '/public/assets/icons/resources/energy.svg'
import Minerals from '/public/assets/icons/resources/minerals.svg'
import Oxygen from '/public/assets/icons/resources/oxygen.svg'
import Water from '/public/assets/icons/resources/water.svg'
import { FilterTabProps } from '../../components/MintingFilterTabs/FilterTab/MintingFilterTab'

export const mockMintingResources: Omit<FilterTabProps, 'active'>[] = [
  {
    icon: <Oxygen />,
    label: 'Oxygen',
    count: 8,
  },
  {
    icon: <Water />,
    label: 'Water',
    count: 2,
  },
  {
    icon: <Energy />,
    label: 'Energy',
    count: 5,
  },
  {
    icon: <Minerals />,
    label: 'Minerals',
    count: 5,
  },
]
