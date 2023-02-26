import type { AppProps } from 'next/app'
import { Layout } from 'features'
import { Provider } from 'react-redux'
import { store } from 'store'
import { Web3ReactHooks, Web3ReactProvider } from '@web3-react/core'
import { MetaMask } from '@web3-react/metamask'
import { hooks as metaMaskHooks, metaMask } from 'connectors/metaMask'

import '../src/styles/globals.scss'

const connectors: [MetaMask, Web3ReactHooks][] = [[metaMask, metaMaskHooks]]

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Web3ReactProvider connectors={connectors}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Web3ReactProvider>
    </Provider>
  )
}

export default MyApp
