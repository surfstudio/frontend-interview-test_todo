/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "../shared/ui/Modal/Modal";
import { ModalHeader } from "../shared/ui/Modal/ModalHeader";
import { ModalRow } from "../shared/ui/Modal/ModalRow";
import { ModalInput } from "../shared/ui/Modal/ModalInput";
import { ModalTextarea } from "../shared/ui/Modal/ModalTextarea";
import { ModalFooter } from "../shared/ui/Modal/ModalFooter";
import { tasksUpdated } from "../features/tasksSlice";
import { categoriesUpdated } from "../features/categoriesSlice";

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
