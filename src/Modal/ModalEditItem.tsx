/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalComponents/ModalHeader/ModalHeader";
import { ModalRow } from "./ModalComponents/ModalRow/ModalRow";
import { ModalInput } from "./ModalComponents/ModalInput/ModalInput";
import { ModalTextarea } from "./ModalComponents/ModalTextarea/ModalTextarea";
import { ModalFooter } from "./ModalComponents/ModalFooter/ModalFooter";
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

export const ModalEditItem: React.FC<ModalEditItemProps> = (props) => {
  const { item, active, setActive } = props;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const [name, setName] = useState<string>(item.name);
  const [selected, setSelected] = useState<string>(item.category || "");
  const [description, setDescription] = useState<string>(item.description);

  return (
    <Modal isActive={active} setIsActive={setActive}>
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
