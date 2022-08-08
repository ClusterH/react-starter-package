import { AbstractConnector } from '@web3-react/abstract-connector'

import METAMASK_ICON_URL from 'assets/images/metamask_icon.svg'
import WALLETCONNECT_ICON_URL from 'assets/images/wallet_connect_icon.svg'

import { ConnectorNames } from './web3'
import { connectorsByName } from './web3Connectors'

interface WalletInfo {
  connector?: AbstractConnector
  connectorId?: ConnectorNames
  name: string
  iconURL: string
  description: string
  href: string | undefined
  color: string
  primary?: true
  mobile?: true
  mobileOnly?: true
}

export const SUPPORTED_WALLETS: { [key: string]: WalletInfo } = {
  METAMASK: {
    connector: connectorsByName.injected,
    connectorId: ConnectorNames.Injected,
    name: 'MetaMask',
    iconURL: METAMASK_ICON_URL,
    description: 'Easy-to-use browser extension.',
    href: undefined,
    color: '#E8831D',
  },
  WALLET_CONNECT: {
    connector: connectorsByName.walletconnect,
    connectorId: ConnectorNames.WalletConnect,
    name: 'WalletConnect',
    iconURL: WALLETCONNECT_ICON_URL,
    description: 'Connect to Trust Wallet, Rainbow Wallet and more...',
    href: undefined,
    color: '#4196FC',
    mobile: true,
  },
}
