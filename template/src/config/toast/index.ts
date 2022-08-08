import { ReactNode } from 'react'

import { toast } from 'react-toastify'

export type TypeToastOptions = 'info' | 'success' | 'warning' | 'error'

export interface IToast {
  id: string
  type: TypeToastOptions
  content: string | ReactNode
}

export const notifyToast = (t: IToast, toastOption = {}) => {
  toast[t.type](t.content, { ...toastOption, toastId: t.id })
}
