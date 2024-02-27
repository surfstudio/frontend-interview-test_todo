/* VENDOR */
import React, { useState } from "react";

/* APPLICATION */
import down from "../../../assets/icons/down.svg";
import { selectAllCategories } from "../../../pages/Categories/categoriesSlice";
import "./ModalDropdown.css"
import {useAppSelector} from "../../../app/hooks/hooks";
import {ModalDropdownProps} from "../../types/item";

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState(false),
    options = useAppSelector(selectAllCategories);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="item-label">Категория</span>
      <div className={`dropdown-btn ${!selected && "placeholder"}`}>
        {options.find((option) => option.id === selected)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="content">
          {options.map((option) => (
            <div
              className = {`item ${selected === option.id}`}
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
