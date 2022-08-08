import ETHEREUM_ICON from 'assets/images/ethereum.svg'
import CONTRACT_ABI from 'config/abis/exampleContractABI.json'

export enum SupportedChainId {
  MAIN = 1,
  GOERLI_TESTNET = 5,
}

export enum ConnectorNames {
  Injected = 'injected',
  WalletConnect = 'walletconnect',
}

export const DEFAULT_CHAIN_ID = process.env.REACT_APP_ENVIRONMENT === 'prod' ? SupportedChainId.MAIN : SupportedChainId.GOERLI_TESTNET

export const NETWORK_INDICATOR: { [chainId: number]: { name: 'Ethereum' | 'Goerli'; icon: string } } = {
  [SupportedChainId.MAIN]: { name: 'Ethereum', icon: ETHEREUM_ICON },
  [SupportedChainId.GOERLI_TESTNET]: { name: 'Goerli', icon: ETHEREUM_ICON },
}

export const SUPPORTED_CHAIN_IDS: SupportedChainId[] = [SupportedChainId.MAIN, SupportedChainId.GOERLI_TESTNET]

type AddressMap = { [chainId: number]: string }

export const EXAMPLE_CONTRACT_ADDRESSES: AddressMap = {
  [SupportedChainId.MAIN]: 'Mainnet contract address',
  [SupportedChainId.GOERLI_TESTNET]: 'testnet contract address',
}

export const CONTRACT_ABIS = {
  EXPERT_SUMMIT: CONTRACT_ABI,
}

const ALCHEMY_KEY = process.env.REACT_APP_ALCHEMY_KEY
const ALCHEMY_KEY_GOERLI = process.env.REACT_APP_ALCHEMY_KEY_GOERLI

export const NETWORK_URLS: {
  [chainId in number]: string
} = {
  [SupportedChainId.MAIN]: `https://eth-mainnet.alchemyapi.io/v2/${ALCHEMY_KEY}`,
  [SupportedChainId.GOERLI_TESTNET]: `https://eth-goerli.alchemyapi.io/v2/${ALCHEMY_KEY_GOERLI}`,
}

export const POLLING_INTERVAL = 30000
export const GAS_PRICE_POLLING_INTERVAL = 60000
export const connectorLocalStorageKey = 'connectorId'
export const walletLocalStorageKey = 'wallet'
