import { createSlice } from '@reduxjs/toolkit'

interface IState {
  isLoading: boolean
  walletBalance: number
}

export const initialState: IState = {
  isLoading: false,
  walletBalance: 0,
}

const web3Slice = createSlice({
  name: 'web3',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload
    },
    setWalletBalance(state, action) {
      state.walletBalance = action.payload
    },
  },
})

export const { setIsLoading, setWalletBalance } = web3Slice.actions
export default web3Slice.reducer
