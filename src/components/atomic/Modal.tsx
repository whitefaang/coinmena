import classNames from 'classnames'
import React, { ReactElement, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

type Props = {
  children: ReactElement
  className?: string
  show: boolean
  onOverlayClick?: () => void
}

function Modal({ children, className, show, onOverlayClick }: Props) {
  const modalRef = useRef(document.getElementById('modals') as HTMLDivElement)
  const boxRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (show && boxRef) {
      setTimeout(() => {
        const boxEl = boxRef.current
        if (boxEl) {
          boxEl.classList.remove('opacity-0', '-top-10')
        }
      }, 200)
    }
  }, [show])

  return show ? (
    createPortal(
      <div
        ref={boxRef}
        className={classNames(
          'w-full h-full fixed left-0 bg-gray-900 bg-opacity-30 transition-all opacity-0 top-0 z-50',
          'flex flex-col items-center justify-center',
          className
        )}
        onClick={(e) => {
          if (e.target === boxRef.current && onOverlayClick) {
            onOverlayClick()
          }
        }}
      >
        {children}
      </div>,
      modalRef.current
    )
  ) : (
    <></>
  )
}

export default Modal
