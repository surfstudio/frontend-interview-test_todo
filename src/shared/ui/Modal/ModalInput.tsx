import React from "react";

/* APPLICATION */
import important from "../../../assets/icons/important.svg";
import './ModalInput.css'

interface ModalInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
}

export const ModalInput: React.FC<ModalInputProps> = ({
  name,
  setName,
  size,
}) => {
  return (
    <div
      className={`wrapper ${size && "large"}`}
    >
      <input
        id="modalinput"
        className="modalinput"
        placeholder="Введите имя задачи/категории"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className="icon" />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
