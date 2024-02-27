/* VENDOR */
import { useLocation } from "react-router-dom";
import React from "react";

/* APPLICATION */
import { Modal, ModalHeader, ModalText, ModalFooter } from "../../shared/ui/Modal";
import { tasksRemoved, tasksClearedCategories } from "../../pages/Tasks/tasksSlice";
import { categoriesRemoved } from "../../pages/Categories/categoriesSlice";
import {useAppDispatch} from "../../app/hooks/hooks";
import {ModalRemoveItemProps} from "../../shared/types/item";

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => {
                dispatch(categoriesRemoved(item.id));
                dispatch(tasksClearedCategories(item.id));
              }
            : () => dispatch(tasksRemoved(item.id))
        }
      />
    </Modal>
  );
};
