/* VENDOR */
import React, { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import down from "../../../assets/icons/down.svg";
import { selectAllCategories } from "../../../features/categoriesSlice";
import "./ModalDropdown.css"

interface ModalDropdownProps {
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false),
    options = useSelector(selectAllCategories);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="label">Категория</span>
      <div className={selected ? "dropdown-btn" : "placeholder"}>
        {options.find((option) => option.id === selected)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="content">
          {options.map((option) => (
            <div
              className="item"
              onClick={() => {
                setSelected(option.id);
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
