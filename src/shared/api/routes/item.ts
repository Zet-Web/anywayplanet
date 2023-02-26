import { AxiosResponse } from 'axios'
import api, { endpoints_market } from 'shared/api'
import { MarketCards } from 'shared/types/marketCards'

export type AxiosApiItemsResponse = Promise<AxiosResponse<MarketCards[]>>

export const getItems = (): AxiosApiItemsResponse => {
  return api.get(endpoints_market.market_items)
}
