/* VENDOR */
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import {
  Modal,
  ModalHeader,
  ModalInput,
  ModalRow,
  ModalTextarea,
  ModalFooter,
} from "../../shared/ui/Modal";
import { tasksAdded } from "../../pages/Tasks/tasksSlice";
import { categoriesAdded } from "../../pages/Categories/categoriesSlice";
import { useAppDispatch } from "../../app/hooks/hooks";
import { ModalCreateItemProps } from "../../shared/types/item";

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    [name, setName] = useState(""),
    [selected, setSelected] = useState(""),
    [description, setDescription] = useState("");

  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  const handleSubmit = () => {
    if (!name) return;
    dispatch(
      isCategories
        ? categoriesAdded({ name, description })
        : tasksAdded({
            name,
            description,
            category: selected,
          }),
    );
    clearState();
    setActive(false);
  };

  return (
    <Modal active={active} setActive={setActive} clearState={clearState}>
      <ModalHeader
        clearState={clearState}
        setActive={setActive}
        title={isCategories ? "Создание категории" : "Создание задачи"}
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
        clearState={clearState}
        submitBtnText="Создать"
        size="large"
        onSubmit={handleSubmit}
      />
    </Modal>
  );
};
