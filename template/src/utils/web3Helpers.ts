import { getAddress } from '@ethersproject/address'
import { BigNumber } from '@ethersproject/bignumber'
import { AddressZero } from '@ethersproject/constants'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcSigner, StaticJsonRpcProvider, Web3Provider } from '@ethersproject/providers'

import { DEFAULT_CHAIN_ID, NETWORK_URLS, POLLING_INTERVAL, SupportedChainId } from 'config/web3Connect'

export const getLibrary = (provider: any): Web3Provider => {
  const library = new Web3Provider(provider)
  library.pollingInterval = POLLING_INTERVAL
  return library
}

export const isSupportedNetwork = (chainId: number | undefined) => {
  if (chainId === undefined) return false
  if (Object.values(SupportedChainId).includes(chainId)) return true
  return false
}

// returns the checksummed address if the address is valid, otherwise returns false
export const isAddress = (value: any): string | false => {
  try {
    return getAddress(value)
  } catch {
    return false
  }
}

// shorten the checksummed version of the input address to have 0x + 4 characters at start and end
export const shortenAddress = (address: string, chars = 4): string => {
  const parsed = isAddress(address)
  if (!parsed) {
    return ''
    // throw Error(`Invalid 'address' parameter '${address}'.`)
  }
  return `${parsed.substring(0, chars + 2)}...${parsed.substring(42 - chars)}`
}

// account is not optional
export const getSigner = (library: Web3Provider, account: string): JsonRpcSigner => {
  return library.getSigner(account).connectUnchecked()
}
// account is optional
export const getProviderOrSigner = (library: Web3Provider, account?: string): Web3Provider | JsonRpcSigner => {
  return account ? getSigner(library, account) : library
}

export const getSimpleRPCProvider = (chainId: number | undefined) => {
  return new StaticJsonRpcProvider(NETWORK_URLS[chainId ?? DEFAULT_CHAIN_ID])
}

// account is optional
export const getContract = (address: string, ABI: any, library: Web3Provider, account?: string): Contract => {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account))
}

export const getContractWithSimpleProvider = (address: string, ABI: any, chainId: number) => {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`)
  }

  const provider = getSimpleRPCProvider(chainId)
  if (!provider) throw Error('Cant Get Provider Correctly, Please check your Network status')

  return new Contract(address, ABI, provider)
}

/**
 * Estimate the gas needed to call a function, and add a 10% margin
 * @param contract Used to perform the call
 * @param methodName The name of the methode called
 * @param gasMarginPer10000 The gasMargin per 10000 (i.e. 10% -> 1000)
 * @param args An array of arguments to pass to the method
 * @returns https://docs.ethers.io/v5/api/providers/types/#providers-TransactionReceipt
 */
export const estimateGas = async (contract: Contract, methodName: string, methodArgs: any[], gasMarginPer10000 = 1000) => {
  if (!contract[methodName]) {
    throw new Error(`Method ${methodName} doesn't exist on ${contract.address}`)
  }
  const rawGasEstimation = await contract.estimateGas[methodName](...methodArgs)
  // By convention, ethers.BigNumber values are multiplied by 1000 to avoid dealing with real numbers
  const gasEstimation = rawGasEstimation.mul(BigNumber.from(10000).add(BigNumber.from(gasMarginPer10000))).div(BigNumber.from(10000))
  return gasEstimation
}
