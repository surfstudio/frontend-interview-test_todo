/* VENDOR */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

/* APPLICATION */
import { Modal } from "./Modal";
import { ModalHeader } from "./ModalComponents/ModalHeader/ModalHeader";
import { ModalInput } from "./ModalComponents/ModalInput/ModalInput";
import { ModalRow } from "./ModalComponents/ModalRow/ModalRow";
import { ModalTextarea } from "./ModalComponents/ModalTextarea/ModalTextarea";
import { ModalFooter } from "./ModalComponents/ModalFooter/ModalFooter";
import { tasksAdded } from "../features/tasksSlice";
import { categoriesAdded } from "../features/categoriesSlice";

interface ModalCreateItemProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
  active,
  setActive,
}) => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");
  const [name, setName] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function clearState() {
    setName("");
    setDescription("");
    setSelected("");
  }

  return (
    <Modal isActive={active} setIsActive={setActive} clearState={clearState}>
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
        onSubmit={
          name
            ? () => {
                dispatch(
                  isCategories
                    ? categoriesAdded({ name, description })
                    : tasksAdded({
                        name,
                        description,
                        category: setSelected,
                      })
                );
                clearState();
                setActive(false);
              }
            : () => {}
        }
      />
    </Modal>
  );
};
