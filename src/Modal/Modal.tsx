/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";

export interface DefaultModalProps {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ModalProps extends DefaultModalProps {
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { clearState, isActive, setIsActive, children } = props;

  const handleClose = () => {
    clearState && clearState();
    setIsActive(false);
  };

  return (
    <div className={isActive ? "modal active" : "modal"} onClick={handleClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
