/* VENDOR */
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { DefaultModalProps, Modal } from "./Modal";
import { ModalHeader } from "./ModalComponents/ModalHeader/ModalHeader";
import { ModalText } from "./ModalComponents/ModalText/ModalText";
import { ModalFooter } from "./ModalComponents/ModalFooter/ModalFooter";
import { tasksRemoved, tasksClearedCategories } from "../features/tasksSlice";
import { categoriesRemoved } from "../features/categoriesSlice";
import { ItemProps } from "../Lists/ListItem";

interface ModalRemoveItemProps extends DefaultModalProps {
  item: ItemProps;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = (props) => {
  const { item, isActive, setIsActive } = props;

  const { id, name } = item;

  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const titleVariant = isCategories ? "категорию" : "задачу";
  const headerVariant = isCategories ? " категории" : "задачи";
  const text = `Вы уверены, что хотите удалить ${titleVariant} "${name}"?`;

  const handleRemoveTask = (id: string) => dispatch(tasksRemoved(id));

  const handleRemoveCategory = (id: string) => {
    dispatch(categoriesRemoved(id));
    dispatch(tasksClearedCategories(id));
  };

  return (
    <Modal isActive={isActive} setIsActive={setIsActive}>
      <ModalHeader
        setActive={setIsActive}
        title={`Удаление ${headerVariant}`}
      />
      <ModalText text={text} />
      <ModalFooter
        setActive={setIsActive}
        submitBtnText="Да"
        onSubmit={
          isCategories
            ? () => handleRemoveCategory(id)
            : () => handleRemoveTask(id)
        }
      />
    </Modal>
  );
};
