export interface MarketCards {
  id: number
  supply: number
  price: {
    USDT: number
    MAP: number
  }
  title: string
  description: string
  image: string
  level: number
  rarity: 'LEGENDARY' | 'EPIC' | 'RARE' | 'COMMON'
  type: string
  buildingType: string
  config: {
    production: any
    usageCost: any
    capacity: any
    cost: any
  }
  hash?: string
}
