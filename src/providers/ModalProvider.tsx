import type React from "react"
import ModalContext from "../contexts/ModalContext"
import { useState } from "react"
import type { Produto } from "../pages/Produtos";

export const ModalProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState<Produto>({} as Produto);
  const [classModal, setClassModal] = useState("");

  const openModal = () => {
    setClassModal("open");
    setIsOpen(true);
  };
  
  const closeModal = () => {
    setClassModal("close");
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  };

  return <ModalContext.Provider value={{
    isOpen,
    openModal,
    closeModal,
    dataModal,
    setDataModal,
    classModal
  }}>
    {children}
  </ModalContext.Provider>
}

export default ModalProvider