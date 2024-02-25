import React from "react";

import './ModalTextarea.css'

interface ModalTextareaProps {
  description: string;
  setDescription: React.Dispatch<React.SetStateAction<string>>;
}

export const ModalTextarea: React.FC<ModalTextareaProps> = ({
  description,
  setDescription,
}) => {
  return (
    <div className="textarea-wrapper">
      <label htmlFor="modaltextarea">Описание</label>
      <textarea
        id="modaltextarea"
        className="modaltextarea"
        placeholder="Введите описание задачи"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
    </div>
  );
};
