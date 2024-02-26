/* VENDOR */
import React from "react";

/* APPLICATION */
import "./Modal.css";
import {Item, ModalActiveProps} from "../../types/item";

interface ModalProps extends ModalActiveProps{
  item?: Item;
  children: React.ReactNode;
  clearState?(): void;
}

export const Modal: React.FC<ModalProps> = ({
  clearState,
  active,
  setActive,
  children,
}) => {
  return (
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => {
        clearState && clearState();
        setActive(false);
      }}
    >
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
