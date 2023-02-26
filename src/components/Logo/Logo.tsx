import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

import cn from 'classnames'

import s from './logo.module.scss'

interface LogoProps {
  width: string | number
  height: string | number
  className?: string
}

export const Logo: FC<LogoProps> = ({ width, height, className }) => {
  return (
    <Link href={'/'}>
      <a className={cn(s.logo, className)}>
        <Image
          src={'/assets/icons/logo.svg'}
          width={width}
          height={height}
          alt='logo'
        />
      </a>
    </Link>
  )
}
