import React from 'react'

import styled from 'styled-components/macro'

import { FlexRow, ImageContainer, TextWrapper } from 'styles/components'
import { themeBorderRadius, themeBoxShadow, themeBreakPoint, themeColor } from 'styles/theme'

import { IWalletModalItem } from './types'

const ItemWrapper = styled(FlexRow)<{ isClickable?: boolean }>`
  background-color: #1a1a1a;
  border-radius: ${themeBorderRadius.small};
  padding: 16px 32px;
  box-shadow: ${({ isClickable }) => (isClickable ? themeBoxShadow.boxShadow1 : 'none')};
  &:hover {
    cursor: ${({ isClickable }) => (isClickable ? 'pointer' : '')};
    box-shadow: none;
  }

  @media only screen and ${themeBreakPoint.sm} {
    padding: 8px 24px;
  }
`
const GreenCircle = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${themeColor.success};
  border-radius: ${themeBorderRadius.circle};
`

const WalletItem: React.FC<IWalletModalItem> = ({ name, iconUrl, isClickable = true, handleClick, isActive = false }) => {
  return (
    <ItemWrapper onClick={handleClick} isClickable={isClickable === true && !isActive}>
      <FlexRow rowWidth={'fit-content'} justifyContent={'flex-start'}>
        <ImageContainer src={iconUrl} width={'36px'} borderRadius={themeBorderRadius.none} />
        <TextWrapper fontWeight={'semiBold'} lineHeight={'120%'} letterSpacing={'0.2px'} margin={'0 0 0 40px'}>
          {name}
        </TextWrapper>
        {isActive === true && <GreenCircle />}
      </FlexRow>
    </ItemWrapper>
  )
}

export default WalletItem
