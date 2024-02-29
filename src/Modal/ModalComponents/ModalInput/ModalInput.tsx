import { useLocation } from "react-router-dom";
import important from "../../../icons/important.svg";

import "./ModalInput.css";

interface ModalInputProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
}

export const ModalInput: React.FC<ModalInputProps> = (props) => {
  const { name, setName, size } = props;

  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const placeholder = isCategories ? "категории" : "задачи";

  const isLarge = size === "large";

  return (
    <div
      className={isLarge ? "modalinput-wrapper large" : "modalinput-wrapper"}
    >
      <input
        className="modalinput"
        placeholder={`Введите имя ${placeholder}`}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <img src={important} alt="important" className="modalinput-icon" />
      <label htmlFor="modalinput">Имя</label>
    </div>
  );
};
