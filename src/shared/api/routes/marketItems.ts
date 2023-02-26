import { AxiosPromise } from 'axios'
import { ItemCardProps } from 'components/ItemCard/ItemCard'

import { api, endpoints_market } from '..'

export const getMarketItems = (): AxiosPromise<ItemCardProps[]> => {
  return api.get(endpoints_market.market_items)
}
