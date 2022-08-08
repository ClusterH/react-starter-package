import { useCallback, useState } from 'react'

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleOpenModal = useCallback(() => {
    setIsOpen(!isOpen)
  }, [isOpen])

  return { isOpen, handleOpenModal }
}
