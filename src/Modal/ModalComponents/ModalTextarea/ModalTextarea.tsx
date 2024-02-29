import { useLocation } from "react-router-dom";
import "./ModalTextarea.css";

interface ModalTextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
}) => {
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const placeholder = isCategories ? "категории" : "задачи";

  return (
    <div className="modaltextarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder={`Введите описание ${placeholder}`}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
