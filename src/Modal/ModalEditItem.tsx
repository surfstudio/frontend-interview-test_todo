/* VENDOR */
import { useState } from "react";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { DefaultModalProps, Modal } from "./Modal";
import { ModalHeader } from "./ModalComponents/ModalHeader/ModalHeader";
import { ModalRow } from "./ModalComponents/ModalRow/ModalRow";
import { ModalInput } from "./ModalComponents/ModalInput/ModalInput";
import { ModalTextarea } from "./ModalComponents/ModalTextarea/ModalTextarea";
import { ModalFooter } from "./ModalComponents/ModalFooter/ModalFooter";
import { tasksUpdated } from "../features/tasksSlice";
import { categoriesUpdated } from "../features/categoriesSlice";
import { ItemProps } from "../Lists/ListItem";
import { useAppDispatch } from "../app/hooks";

interface ModalEditItemProps extends DefaultModalProps {
  item: ItemProps;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = (props) => {
  const { item, isActive, setIsActive } = props;

  const {
    category: initialCategory = "",
    name: initialName,
    description: initialDescription,
    id,
  } = item;

  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const [name, setName] = useState<string>(initialName);
  const [category, setCategory] = useState<string>(initialCategory);
  const [description, setDescription] = useState<string>(initialDescription);

  const titleHeader = isCategories
    ? "Редактирование категории"
    : "Редактирование задачи";

  const handleEditTask = (id: string) => {
    dispatch(tasksUpdated({ id, name, description, category }));
    setIsActive(false);
  };

  const handleEditCategory = (id: string) => {
    dispatch(categoriesUpdated({ id, name, description }));
    setIsActive(false);
  };

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <ModalHeader setActive={setIsActive} title={titleHeader} />
      {isCategories ? (
        <ModalInput name={name} setName={setName} size="large" />
      ) : (
        <ModalRow
          name={name}
          setName={setName}
          selected={category}
          setSelected={setCategory}
        />
      )}
      <ModalTextarea
        description={description}
        setDescription={setDescription}
      />
      <ModalFooter
        setActive={setIsActive}
        submitBtnText="Сохранить"
        isDisabled={!name}
        size="large"
        onSubmit={
          isCategories ? () => handleEditCategory(id) : () => handleEditTask(id)
        }
      />
    </Modal>
  );
};
