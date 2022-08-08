import React from 'react'

import styled from 'styled-components/macro'

import { CloseIconWrapper, FlexColumn, OverlayContainer } from 'styles/components'
import { themeBorderRadius, themeBorders, themeColor } from 'styles/theme'

const ModalWrapper = styled(FlexColumn)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 90vh;
  overflow-y: auto;
  padding: 24px;
  z-index: 999;
`

interface IModalProps {
  children: React.ReactNode
  isOpen: boolean
  handleOpenModal: () => void
  width?: string
  backgroundColor?: string
  isBorder?: boolean
  isCloseDisabled?: boolean
}

const Modal: React.FC<IModalProps> = ({ children, isOpen, handleOpenModal, width, backgroundColor, isBorder, isCloseDisabled }) => {
  if (!isOpen) return null

  return (
    <>
      <OverlayContainer
        onClick={() => {
          isCloseDisabled !== true && handleOpenModal()
        }}
      />
      <ModalWrapper
        backgroundColor={backgroundColor ? backgroundColor : themeColor.background2}
        borderRadius={themeBorderRadius.small}
        colWidth={width ?? '30%'}
        border={isBorder ? themeBorders.border1 : 'none'}
      >
        {children}
        <CloseIconWrapper
          onClick={() => {
            isCloseDisabled !== true && handleOpenModal()
          }}
        />
      </ModalWrapper>
    </>
  )
}

export default Modal
