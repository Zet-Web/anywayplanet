import { useEffect, useState } from 'react'
import { getItems } from 'shared/api/routes/item'
import { handleError } from 'shared/utils/handleError'
import { MarketCards } from 'shared/types/marketCards'
import { Filters, RaityFilters } from 'shared/types/filters'

const CARDPERROW = 4
const STARTCARDAMOUNT = 12

enum Rarity {
  LEGENDARY = 'legend',
  EPIC = 'epic',
  RARE = 'rare',
  COMMON = 'normal',
}

export const useFilteredCards = () => {
  const [cards, setCards] = useState<MarketCards[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [next, setNext] = useState<number>(STARTCARDAMOUNT)

  const [filters, setFilters] = useState<Filters>({
    rarity: [],
    price: [50, 1000],
    level: [0, 100],
  })

  const handleMoreImage = () => {
    setNext(next + CARDPERROW)
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }

  const deleteFilter = (filter: RaityFilters) => {
    const copy = [...filters.rarity]
    copy.splice(filters.rarity.indexOf(filter), 1)
    return copy
  }

  const handleFilters = (filter: RaityFilters, value?: number[]) => {
    setNext(STARTCARDAMOUNT)
    if (filter != 'price' && filter != 'level') {
      if (filters.rarity.includes(filter)) {
        return setFilters(prevState => ({
          ...prevState,
          rarity: deleteFilter(filter),
        }))
      }
      setFilters(prevState => ({
        ...prevState,
        rarity: [...filters.rarity, filter],
      }))
    } else if (filter === 'price' && value) {
      return setFilters({ ...filters, price: value })
    } else if (value) setFilters({ ...filters, level: value })
  }

  const filterCard = (card: MarketCards) => {
    if (
      filters['rarity'].length === 0 ||
      filters['rarity'].includes(Rarity[card.rarity])
    ) {
      if (
        card.price.USDT < filters.price[0] ||
        card.price.USDT > filters.price[1]
      )
        return false
      if (card.level < filters.level[0] || card.level > filters.level[1])
        return false
      return true
    }
    return false
  }

  const updateCards = async () => {
    let filteredCards: MarketCards[]
    try {
      const { data } = await getItems()
      filteredCards = data.filter((card: MarketCards) => {
        return filterCard(card)
      })
      setCards(filteredCards)
    } catch (error) {
      handleError(error)
    }
  }

  useEffect(() => {
    updateCards()
  }, [filters])

  return {
    cards,
    isLoading,
    handleFilters,
    handleMoreImage,
    next,
    filters,
  }
}
