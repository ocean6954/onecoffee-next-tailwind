import { Modal } from '@mui/base'
import exp from 'constants'
import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export const ModalProvider = (children) => {
  const [modalNumber, setModalNumber] = useState(null)

  const openModal = (number) => {
    setModalNumber(number)
  }
  const closeModal = () => {
    setModalNumber(null)
  }

  return (
    <ModalContext.Provider value={{ modalNumber, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  return context
}
