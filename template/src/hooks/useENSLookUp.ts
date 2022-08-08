import { useEffect, useState } from 'react'

import { useActiveWeb3React } from 'hooks'
import { getSimpleRPCProvider } from 'utils'

export const useReverseENSLookUp = () => {
  const { account, chainId } = useActiveWeb3React()
  const [ens, setEns] = useState<string>('')

  useEffect(() => {
    const provider = getSimpleRPCProvider(chainId)
    if (account && provider) {
      provider
        .lookupAddress(account)
        .then((name) => {
          setEns(name as string)
        })
        .catch((error) => {
          console.log('error resolving reverse ens lookup: ', error)
        })
    }

    return () => {
      setEns('')
    }
  }, [account, chainId])

  return ens
}
