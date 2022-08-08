import { useEffect, useRef, useState } from 'react'

import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
// eslint-disable-next-line import/no-unresolved, no-restricted-imports
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'

import { DEFAULT_CHAIN_ID } from 'config/web3Connect'
import { getSimpleRPCProvider } from 'utils'

/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
export const useActiveWeb3React = (): Web3ReactContextInterface<Web3Provider> => {
  const { library, chainId, ...web3React } = useWeb3React()
  const refEth = useRef(library)
  const [provider, setProvider] = useState(library || getSimpleRPCProvider(chainId))

  useEffect(() => {
    if (library !== refEth.current) {
      setProvider(library || getSimpleRPCProvider(chainId))
      refEth.current = library
    }
  }, [chainId, library])

  return { library: provider, chainId: chainId === undefined ? DEFAULT_CHAIN_ID : chainId, ...web3React }
}
