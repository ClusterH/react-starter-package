// Getting Object key array with corresponding Object type
export function ObjectKeys<T>(o: T): (keyof T)[] {
  // type cast should be safe because that's what really Object.keys() does
  return Object.keys(o) as (keyof T)[]
}

export interface EthereumProvider {
  isCoinbaseWallet?: true
  isMetaMask?: true
  on?: (...args: any[]) => void
  removeListener?: (...args: any[]) => void
  autoRefreshOnNetworkChange?: boolean
}
