/* VENDOR */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal, ModalHeader, ModalRow, ModalInput, ModalTextarea, ModalFooter } from "../../shared/ui/Modal";
import { tasksUpdated } from "../../pages/Tasks/tasksSlice";
import { categoriesUpdated } from "../../pages/Categories/categoriesSlice";

interface ModalEditItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(item.name),
    [selected, setSelected] = useState(item.category || ""),
    [description, setDescription] = useState(item.description);

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader
        setActive={setActive}
        title={
          isCategories ? "Редактирование категории" : "Редактирование задачи"
        }
      />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Сохранить"
        size="large"
        onSubmit={() => {
          dispatch(
            isCategories
              ? categoriesUpdated({ id: item.id, name, description })
              : tasksUpdated({
                  id: item.id,
                  name,
                  description,
                  category: selected,
                })
          );
          setActive(false);
        }}
      />
    </Modal>
  );
};
