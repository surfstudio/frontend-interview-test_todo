import React from "react";

/* APPLICATION */
import close from "../../../assets/icons/close.svg";
import './ModalHeader.css'

interface ModalHeaderProps {
  clearState?(): void;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
}

export const ModalHeader: React.FC<ModalHeaderProps> = ({
  clearState,
  title,
  setActive,
}) => {
  return (
    <header className="modal-header">
      <h4 className="title">{title}</h4>
      <button
        className="close-btn"
        onClick={() => {
          clearState && clearState();
          setActive(false);
        }}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
