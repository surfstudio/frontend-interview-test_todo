/* VENDOR */
import { useState } from "react";

/* APPLICATION */
import down from "../../../icons/down.svg";
import { selectAllCategories } from "../../../features/categoriesSlice";
import "./ModalDropdown.css";
import { useAppSelector } from "../../../app/hooks";

interface ModalDropdownProps {
  selected: string | undefined;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  selected,
  setSelected,
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const options = useAppSelector(selectAllCategories);

  const currentOption =
    options.find((option) => option.id === selected)?.name ||
    "Выберите категорию";

  const handleOpen = () => setIsActive(!isActive);

  const handleClick = (id: string) => {
    setSelected(id);
    setIsActive(false);
  };

  return (
    <div className="dropdown" onClick={handleOpen}>
      <span className="dropdown-label">Категория</span>
      <div className={selected ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {currentOption}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => {
            const { id, name } = option;

            return (
              <div
                className={
                  selected === id ? "dropdown-item-selected" : "dropdown-item"
                }
                onClick={() => handleClick(id)}
                key={id}
              >
                {name}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
