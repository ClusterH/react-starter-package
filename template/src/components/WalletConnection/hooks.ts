import React, { useCallback } from 'react'

import { AbstractConnector } from '@web3-react/abstract-connector'
import { UnsupportedChainIdError, useWeb3React } from '@web3-react/core'
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'

import { notifyToast } from 'config/toast'
import { connectorLocalStorageKey, ConnectorNames, connectorsByName, setupNetwork } from 'config/web3Connect'

export const useWalletConnectionModalView = () => {
  const [walletView, setWalletView] = React.useState<'account' | 'list'>('account')

  const handleChangeWalletView = React.useCallback((walletView: 'account' | 'list') => setWalletView(walletView), [])

  return { walletView, handleChangeWalletView }
}

export const useWalletConnect = () => {
  const { activate, deactivate } = useWeb3React()

  const handleSwitch = React.useCallback(async () => {
    const provider = window.ethereum

    if (provider) {
      try {
        await provider.request?.({
          method: 'wallet_requestPermissions',
          params: [
            {
              // eslint-disable-next-line camelcase
              eth_accounts: {},
            },
          ],
        })
      } catch (error) {
        console.log(error)
      }
    }
  }, [])

  const connect = useCallback(
    (connector: AbstractConnector | undefined, connectorId: ConnectorNames | undefined) => {
      if (connectorId) window.localStorage.setItem(connectorLocalStorageKey, connectorId)

      if (connector) {
        activate(connector, async (error: Error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork()
            if (hasSetup) {
              activate(connector)
            }
          } else {
            if (error instanceof NoEthereumProviderError) {
              notifyToast({ id: 'Provider Error', type: 'error', content: 'No provider was found' })
            } else if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector as WalletConnectConnector
                walletConnector.walletConnectProvider = undefined
              }
              notifyToast({ id: 'Authorization Error', type: 'error', content: 'Please authorize to access your account' })
            } else {
              notifyToast({ id: error.name, type: 'error', content: error.message })
            }
          }
        })
      } else {
        notifyToast({ id: 'Unable to find connector', type: 'error', content: 'The connector config is wrong' })
      }
    },
    [activate],
  )

  const disconnect = React.useCallback(() => {
    deactivate()
    // This localStorage key is set by @web3-react/walletconnect-connector
    if (window.localStorage.getItem('walletconnect')) {
      connectorsByName.walletconnect.close()
      connectorsByName.walletconnect.walletConnectProvider = null
    }
  }, [deactivate])

  return { handleSwitch, connect, disconnect }
}
