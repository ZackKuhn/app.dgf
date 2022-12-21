import { createContext } from "react";

interface ModalStateProps {
  isOpen: boolean
}

export const ModalState: ModalStateProps = {
  isOpen: false
};

export const AuthContext = createContext(ModalState.isOpen);