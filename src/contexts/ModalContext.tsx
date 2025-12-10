import { createContext } from "react";
import type { Produto } from "../pages/Produtos";

interface ModalContextProps {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  dataModal: Produto;
  setDataModal: (data: Produto) => void;
  classModal: string;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

export default ModalContext;
