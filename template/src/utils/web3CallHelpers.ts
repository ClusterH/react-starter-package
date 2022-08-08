import { Contract } from '@ethersproject/contracts'

export const getNFTBalance = async (contract: Contract, account: string) => {
  const balance = await contract.balanceOf(account)
  return balance.toNumber()
}
