import { SupportedChainId } from './web3'

export const setupNetwork = async () => {
  const provider = window.ethereum
  const isProd = process.env.REACT_APP_ENVIRONMENT === 'prod'

  if (provider) {
    const chainId = isProd ? SupportedChainId.MAIN : SupportedChainId.GOERLI_TESTNET
    try {
      await provider.request?.({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: `0x${chainId.toString(16)}` }],
      })
      return true
    } catch (error: any) {
      if (error.code === 4902) {
        try {
          await provider.request?.({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: `0x${chainId.toString(16)}`,
                chainName: isProd ? 'Ethereum Mainnet' : 'Goerli Testnet',
                nativeCurrency: {
                  name: isProd ? 'ETH' : 'GoerliETH',
                  symbol: isProd ? 'ETH' : 'GoerliETH',
                  decimals: 18,
                },
                rpcUrls: [isProd ? 'https://mainnet.infura.io/v3/' : 'https://goerli.infura.io/v3/'],
                blockExplorerUrls: [isProd ? 'https://etherscan.io' : 'https://goerli.etherscan.io'],
              },
            ],
          })
          return true
        } catch (error) {
          console.error('Failed to setup the network in Metamask:', error)
          return false
        }
      }
    }
  } else {
    console.error('Cannot setup the Polygon network on metamask because window.ethereum is undefined')
    return false
  }
}
