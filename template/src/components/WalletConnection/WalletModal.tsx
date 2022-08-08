import React from 'react'

import { FlexColumn } from 'styles/components'

import WalletConnectionOptionList from './WalletListWrapper'

const WalletModal: React.FC = () => {
  return (
    <FlexColumn>
      <WalletConnectionOptionList />
    </FlexColumn>
  )
}

export default WalletModal
