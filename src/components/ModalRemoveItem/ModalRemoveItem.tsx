/* VENDOR */
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "../Modal/Modal";
import { ModalHeader } from "../ModalHeader/ModalHeader";
import { ModalText } from "../ModalText/ModalText";
import { ModalFooter } from "../ModalFooter/ModalFooter";
import { tasksRemoved, tasksClearedCategories } from "../../features/tasksSlice";
import { categoriesRemoved } from "../../features/categoriesSlice";
import {useAppDispatch} from "../../app/hooks";

interface ModalRemoveItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
  item,
  active,
  setActive,
}) => {
  const dispatch = useAppDispatch(),
    { pathname } = useLocation(),
    isCategories = pathname.includes("categories"),
    textTask = `Вы уверены, что хотите удалить задачу "${item.name}"?`,
    textCategory = `Вы уверены, что хотите удалить категорию "${item.name}"?`;

  return (
    <Modal item={item} active={active} setActive={setActive}>
      <ModalHeader setActive={setActive} title={isCategories ? "Удаление категории" :"Удаление задачи"} />
      <ModalText text={isCategories ? textCategory : textTask} />
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
