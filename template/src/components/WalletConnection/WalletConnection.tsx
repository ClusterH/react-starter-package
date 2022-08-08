import React, { useEffect, useMemo } from 'react'

import Davatar from '@davatar/react'

import Modal from 'components/Modal/ModalWrapper'
import { notifyToast } from 'config/toast'
import { SUPPORTED_WALLETS } from 'config/web3Connect'
import { useActiveWeb3React, useModal, useReverseENSLookUp } from 'hooks'
import { ImageContainer, MainButton, TextWrapper } from 'styles/components'
import { themeBorderRadius } from 'styles/theme'
import { isMobile, isSupportedNetwork, shortenAddress } from 'utils'

import NetworkIndicator from './NetworkIndicator'
import WalletModal from './WalletModal'

const AddressContainer: React.FC = () => {
  const { account, connector } = useActiveWeb3React()
  const { isOpen, handleOpenModal } = useModal()

  const ens = useReverseENSLookUp()

  const iconUrl = useMemo(
    () =>
      Object.keys(SUPPORTED_WALLETS)
        .filter((wallet) => SUPPORTED_WALLETS[wallet].connector === connector)
        .map((k) => SUPPORTED_WALLETS[k].iconURL)[0],
    [connector],
  )

  return (
    <>
      {account ? (
        <MainButton height={'40px'} padding={'0 24px'} onClick={() => handleOpenModal()}>
          <NetworkIndicator />
          <Davatar size={isMobile ? 12 : 16} address={account} />
          <TextWrapper fontWeight={'bold'}>&nbsp;{ens ?? shortenAddress(account)}</TextWrapper>
          {!isMobile && <ImageContainer src={iconUrl} width={'24px'} borderRadius={themeBorderRadius.none} margin={'0 0 0 12px'} />}
        </MainButton>
      ) : (
        <></>
      )}
      <Modal isOpen={isOpen} handleOpenModal={handleOpenModal} width={isMobile ? '90%' : '30%'} isBorder>
        <WalletModal />
      </Modal>
    </>
  )
}

const WalletConnection: React.FC = () => {
  const { account, chainId } = useActiveWeb3React()
  const { isOpen, handleOpenModal } = useModal()

  useEffect(() => {
    if (isSupportedNetwork(chainId) === false)
      notifyToast({ id: 'wrong_network', type: 'error', content: 'Please connect Ethereum Network!' })
  }, [chainId])

  useEffect(() => {
    if (account && isOpen) handleOpenModal()
  }, [account, handleOpenModal, isOpen])

  return (
    <>
      {!chainId ? (
        <></>
      ) : (
        <>
          {account ? (
            <AddressContainer />
          ) : (
            <MainButton height={'40px'} padding={'0 24px'} onClick={() => handleOpenModal()}>
              {!isSupportedNetwork(chainId) ? (
                <TextWrapper>{'Wrong Network'}</TextWrapper>
              ) : (
                <TextWrapper>{'Connect a wallet'}</TextWrapper>
              )}
              <Modal isOpen={isOpen} handleOpenModal={handleOpenModal} width={isMobile ? '90%' : '30%'} isBorder>
                <WalletModal />
              </Modal>
            </MainButton>
          )}
        </>
      )}
    </>
  )
}

export default WalletConnection
