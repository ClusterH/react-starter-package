export interface IWalletModalItem {
  name: string
  iconUrl: string
  isClickable?: boolean
  handleClick?: () => void
  isActive?: boolean
}
