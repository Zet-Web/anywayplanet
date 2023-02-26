export interface resourcesTabsType {
  TabLabel: string
  icon: string
}

export interface resourcesMainType {
  dateAndTime: string
  TransactionType: string
  TransactionCurrency: resourcesTabsType
  TransactionAmount: string
}

export const resourcesTabs: resourcesTabsType[] = [
  {
    TabLabel: 'all',
    icon: '/assets/icons/resourcesTable/all.svg',
  },
  {
    TabLabel: 'usdt',
    icon: '/assets/icons/resourcesTable/usdtEffect.svg',
  },
  {
    TabLabel: 'map',
    icon: '/assets/icons/resourcesTable/map.svg',
  },
  {
    TabLabel: 'oxygen',
    icon: '/assets/icons/resourcesTable/oxygenEffect.svg',
  },
  {
    TabLabel: 'water',
    icon: '/assets/icons/resourcesTable/glasofWaterEffect.svg',
  },
  {
    TabLabel: 'energy',
    icon: '/assets/icons/resourcesTable/energyEffect.svg',
  },
  {
    TabLabel: 'minerals',
    icon: '/assets/icons/resourcesTable/minerals.svg',
  },
]

export const resourcesMain: resourcesMainType[] = [
  {
    dateAndTime: '10.01.2023 / 16:21',
    TransactionType: 'Upgrade Payment',
    TransactionCurrency: {
      TabLabel: 'ox',
      icon: '/assets/icons/resourcesTable/oxygenEffect.svg',
    },
    TransactionAmount: '-370',
  },
  {
    dateAndTime: '27.10.2022 / 20:03',
    TransactionType: 'Upgrade Payment',
    TransactionCurrency: {
      TabLabel: 'en',
      icon: '/assets/icons/resourcesTable/energyEffect.svg',
    },
    TransactionAmount: '-245',
  },
  {
    dateAndTime: '26.10.2022 / 06:01',
    TransactionType: 'Upgrade Payment',
    TransactionCurrency: {
      TabLabel: 'mn',
      icon: '/assets/icons/resourcesTable/minerals.svg',
    },
    TransactionAmount: '-125',
  },
  {
    dateAndTime: '21.10.2022 / 12:35',
    TransactionType: 'NFT Purchase',
    TransactionCurrency: {
      TabLabel: 'usdt',
      icon: '/assets/icons/resourcesTable/usdtEffect.svg',
    },
    TransactionAmount: '-114.36',
  },
  {
    dateAndTime: '21.10.2022 / 11:07',
    TransactionType: 'Account refill',
    TransactionCurrency: {
      TabLabel: 'usdt',
      icon: '/assets/icons/resourcesTable/usdtEffect.svg',
    },
    TransactionAmount: '+113.43',
  },
]
