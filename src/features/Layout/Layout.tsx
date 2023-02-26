import { FC, ReactNode, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Footer } from 'features/Footer/Footer'
import { mockHeaderMenuItems, mockMarketPlaceHeaderItems } from 'shared/mocks'
import { MarketPlaceHeader } from 'features/MarketPlaceHeader/MarketPlaceHeader'
import { Background } from 'components'

import s from './layout.module.scss'
import { noLayout } from './utils'

interface LayoutProps {
  children: ReactNode
}
export const Layout: FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()

  return noLayout.includes(pathname) ? (
    <>
      <Background />
      {children}
    </>
  ) : (
    <>
      <Background />
      {
      (pathname !== '/' && pathname !== '/example') && (
        <MarketPlaceHeader links={mockMarketPlaceHeaderItems} />
      )}
      {children}
      <Footer links={mockHeaderMenuItems} />
    </>
  )
}
