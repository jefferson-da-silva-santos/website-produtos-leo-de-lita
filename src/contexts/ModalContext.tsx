import { createContext } from "react";

interface ModalContextProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export default ModalContext;