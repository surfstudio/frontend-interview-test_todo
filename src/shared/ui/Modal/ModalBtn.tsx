import React from "react";

import "./ModalBtn.css";

interface ModalBtnProps {
  type?: string;
  children: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  children,
  size,
  onClick,
}) => {
  const btnClass = `modalbtn ${type && "primary"} ${size && "large"}`;
  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
};
