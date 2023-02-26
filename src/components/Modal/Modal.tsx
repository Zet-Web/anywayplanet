import { FC, ReactNode, useRef } from 'react'

import { useClickOutside } from 'shared/hooks/useClickOutside'

import s from './modal.module.scss'
import cn from 'classnames'
import { useWindowDimensions } from 'shared/hooks/useWindowDimensions'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  className?: string
  contentClassName?: string
  isClosable?: boolean
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  className,
  contentClassName,
  isClosable = false,
}) => {
  const { width } = useWindowDimensions()

  if (!isOpen) return null
  return (
    <div className={cn(s.modalOverlay, className)} onClick={onClose}>
      <div
        className={cn(s.modalContent, contentClassName)}
        onClick={e => e.stopPropagation()}
      >
        {isClosable && width <= 768 && (
          <div className={s.cross} onClick={onClose}>
            &times;
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
