/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { DefaultModalProps, Modal } from "./Modal";
import { ModalHeader } from "./ModalComponents/ModalHeader/ModalHeader";
import { ModalInput } from "./ModalComponents/ModalInput/ModalInput";
import { ModalRow } from "./ModalComponents/ModalRow/ModalRow";
import { ModalTextarea } from "./ModalComponents/ModalTextarea/ModalTextarea";
import { ModalFooter } from "./ModalComponents/ModalFooter/ModalFooter";
import { tasksAdded } from "../features/tasksSlice";
import { categoriesAdded } from "../features/categoriesSlice";

export const ModalCreateItem: React.FC<DefaultModalProps> = ({
  isActive,
  setIsActive,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const [name, setName] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const headerTitle = isCategories ? "Создание категории" : "Создание задачи";

  function clearState() {
    setName("");
    setDescription("");
    setCategory("");
  }

  const handleAdd = () => {
    isCategories
      ? dispatch(categoriesAdded({ name, description }))
      : dispatch(tasksAdded({ name, description, category }));
    clearState();
    setIsActive(false);
  };

  return (
    <Modal
      isActive={isActive}
      setIsActive={setIsActive}
      clearState={clearState}
    >
      <ModalHeader
        clearState={clearState}
        setActive={setIsActive}
        title={headerTitle}
      />
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
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        isDisabled={!name}
        onSubmit={name ? handleAdd : () => null}
      />
    </Modal>
  );
};
