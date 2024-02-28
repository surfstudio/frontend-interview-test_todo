/* VENDOR */
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalComponents/ModalHeader/ModalHeader";
import { ModalText } from "./ModalComponents/ModalText/ModalText";
import { ModalFooter } from "./ModalComponents/ModalFooter/ModalFooter";
import { tasksRemoved, tasksClearedCategories } from "../features/tasksSlice";
import { categoriesRemoved } from "../features/categoriesSlice";

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

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = (props) => {
  const { item, active, setActive } = props;

  const { id, name } = item;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const text = `Вы уверены, что хотите удалить задачу "${name}"?`;

  return (
    <Modal isActive={active} setIsActive={setActive}>
      <ModalHeader setActive={setActive} title={"Удаление задачи"} />
      <ModalText text={text} />
      <ModalFooter
        setActive={setActive}
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => {
                dispatch(categoriesRemoved(id));
                dispatch(tasksClearedCategories(id));
              }
            : () => dispatch(tasksRemoved(id))
        }
      />
    </Modal>
  );
};
