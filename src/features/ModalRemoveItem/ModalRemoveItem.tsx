/* VENDOR */
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal, ModalHeader, ModalText, ModalFooter } from "../../shared/ui/Modal";
import { tasksRemoved, tasksClearedCategories } from "../../pages/Tasks/tasksSlice";
import { categoriesRemoved } from "../../pages/Categories/categoriesSlice";

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
  const dispatch = useDispatch(),
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
