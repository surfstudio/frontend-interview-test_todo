/* VENDOR */
import { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import edit from "../icons/edit.svg";
import remove from "../icons/remove.svg";
import { selectAllCategories } from "../features/categoriesSlice";
import { ModalEditItem } from "../Modal/ModalEditItem";
import { ModalRemoveItem } from "../Modal/ModalRemoveItem";
import "./List.css";

export interface ItemProps {
  id: string;
  name: string;
  description: string;
  category?: string;
}

interface ListItemProps {
  item: ItemProps;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const { name, description, category } = item;
  const categories = useSelector(selectAllCategories);
  const [isEditModalActive, setIsEditModalActive] = useState<boolean>(false);
  const [isRemoveModalActive, setIsRemoveModalActive] =
    useState<boolean>(false);

  const currentCategory = categories.find((item) => item.id === category)?.name;

  const handleEdit = () => {
    setIsEditModalActive(true);
  };

  const handleRemove = () => {
    setIsRemoveModalActive(true);
  };

  return (
    <>
      <li className="list-item">
        <div className="list-item-col1">
          <div className="list-item-col1-row1">
            <h3 className="list-item-col1-row1__title">{name}</h3>
            {category && (
              <span className="list-item-col1-row1__category">
                {currentCategory}
              </span>
            )}
          </div>
          <div className="list-item-col1-row2">{description}</div>
        </div>
        <div className="list-item-col2">
          <button className="list-item-col2__btn" onClick={handleEdit}>
            <img src={edit} alt="edit" />
          </button>
          <button className="list-item-col2__btn" onClick={handleRemove}>
            <img src={remove} alt="remove" />
          </button>
        </div>
        <ModalEditItem
          item={item}
          active={isEditModalActive}
          setActive={setIsEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={isRemoveModalActive}
          setActive={setIsRemoveModalActive}
        />
      </li>
    </>
  );
};
