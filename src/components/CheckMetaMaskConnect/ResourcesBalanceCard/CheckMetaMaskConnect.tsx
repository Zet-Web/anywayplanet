import { FC, ReactNode, useEffect, useState } from 'react'
import { hooks, metaMask } from 'connectors/metaMask'
import * as s from './checkMetaMaskConnect.module.scss'

export interface CheckMetaMaskConnectProps {
  className?: string
  children: ReactNode
}

export const CheckMetaMaskConnect: FC<CheckMetaMaskConnectProps> = ({
  className,
  children,
}) => {
  const [hasMetamask, setHasMetamask] = useState(false)

  const isActive = hooks.useIsActive()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (typeof window.ethereum !== 'undefined') {
      setHasMetamask(true)
    }
  })

  useEffect(() => {
    try {
      metaMask.connectEagerly()
    } catch (error) {
      console.log(error)
    }
  }, [])

  const connectMetaMask = () => {
    metaMask.activate()
  }

  return hasMetamask ? (
    isActive ? (
      <>{children}</>
    ) : (
      <button onClick={connectMetaMask} type='button' className={className}>
        Connect to MetaMask
      </button>
    )
  ) : (
    <a
      className={className}
      href='https://metamask.io/download/'
      target='_blank'
      rel='noreferrer'
    >
      Please install MetaMask
    </a>
  )
}
