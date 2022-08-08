import React from 'react'

import { connectorsByName, SUPPORTED_WALLETS } from 'config/web3Connect'
import { useActiveWeb3React } from 'hooks'
import { FlexColumn, FlexRow, HoverTextWrapper, TextWrapper } from 'styles/components'
import { isMobile } from 'utils'

import { useWalletConnect, useWalletConnectionModalView } from './hooks'
import WalletItem from './WalletItem'

const WalletConnectionOptionList: React.FC = () => {
  const { account, connector } = useActiveWeb3React()
  const { handleChangeWalletView } = useWalletConnectionModalView()
  const { connect, disconnect, handleSwitch } = useWalletConnect()

  function getOptions() {
    const isMetaMask = window.ethereum && window.ethereum.isMetaMask
    return Object.keys(SUPPORTED_WALLETS).map((key) => {
      const option = SUPPORTED_WALLETS[key]

      if (isMobile) {
        if (option.mobile) {
          return (
            <WalletItem
              key={key}
              name={option.name}
              iconUrl={option.iconURL}
              handleClick={() => {
                option.connector !== connector &&
                  (option.href ? window.open(option.href, '_blank') : connect(option.connector, option.connectorId))
              }}
              isActive={option.connector && option.connector === connector}
            />
          )
        }

        return null
      }

      if (option.connector === connectorsByName.injected) {
        if (!(window.web3 || window.ethereum)) {
          return (
            <WalletItem
              key={key}
              name={'Install Metamask'}
              iconUrl={option.iconURL}
              isClickable={true}
              handleClick={() => window.open('https://metamask.io/', '_blank')}
              isActive={false}
            />
          )
        } else if (option.name === 'MetaMask' && !isMetaMask) {
          return null
        }
      }

      return (
        !isMobile &&
        !option.mobileOnly && (
          <WalletItem
            key={key}
            name={option.name}
            iconUrl={option.iconURL}
            handleClick={() => {
              option.connector === connector
                ? handleChangeWalletView('account')
                : option.href
                ? window.open(option.href, '_blank')
                : connect(option.connector, option.connectorId)
            }}
            isActive={option.connector === connector}
          />
        )
      )
    })
  }

  return (
    <FlexColumn>
      <FlexRow>
        <TextWrapper lineHeight={'120%'} letterSpacing={'-0.01em'} margin={'0 0 24px'}>
          {'Connect Your wallet'}
        </TextWrapper>
      </FlexRow>
      <FlexColumn gap={'24px'}>{getOptions()}</FlexColumn>
      {account && (
        <FlexRow justifyContent={'flex-end'} margin={'12px 0 0'} gap={'24px'}>
          <HoverTextWrapper onClick={handleSwitch} fontSize={'sm'}>
            {'Switch account'}
          </HoverTextWrapper>
          <HoverTextWrapper onClick={disconnect} fontSize={'sm'}>
            {'Disconnect'}
          </HoverTextWrapper>
        </FlexRow>
      )}
    </FlexColumn>
  )
}

export default WalletConnectionOptionList
