export interface Filters {
  rarity: RaityFilters[]
  price: number[]
  level: number[]
}

export type RaityFilters = 'legend' | 'epic' | 'rare' | 'normal' | "level" | "price"
