import React from 'react'

import styled from 'styled-components/macro'

import { WalletConnection } from 'components/WalletConnection'
import { FlexRow } from 'styles/components'
import { themeBorders, themeColor } from 'styles/theme'

const HeaderContainer = styled(FlexRow)`
  z-index: 9;
  position: fixed;
  top: 0;
  height: 80px;
  background-color: ${themeColor.background1};
  // border-bottom: ${themeBorders.border1};
  padding: 0 4%;
`

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <FlexRow justifyContent={'flex-end'}>
        <WalletConnection />
      </FlexRow>
    </HeaderContainer>
  )
}

export default Header
