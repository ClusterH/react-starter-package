import { AppState } from 'state'
import { useAppSelector } from 'state/hooks'

export const useIsLoading = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.isLoading)
}

export const useWalletBalance = () => {
  return useAppSelector((state: AppState) => state.web3Reducer.walletBalance)
}
