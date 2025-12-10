import type React from "react"
import ModalContext from "../contexts/ModalContext"
import { useState } from "react"

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setIsOpen(false);
  };

  return <ModalContext.Provider value={{
    isOpen,
    openModal,
    closeModal
  }}>
    {children}
  </ModalContext.Provider>
}

export default ModalProvider