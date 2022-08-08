import { EXAMPLE_CONTRACT_ADDRESSES } from 'config/web3Connect'

export const getExampleContractAddress = (chainId: number) => {
  return EXAMPLE_CONTRACT_ADDRESSES[chainId]
}
