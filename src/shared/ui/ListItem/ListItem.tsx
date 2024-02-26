/* VENDOR */
import React, { useState } from "react";
import { useSelector } from "react-redux";

/* APPLICATION */
import edit from "../../../assets/icons/edit.svg";
import remove from "../../../assets/icons/remove.svg";
import { selectAllCategories } from "../../../pages/Categories/categoriesSlice";
import { ModalEditItem } from "../../../features/ModalEditItem/ModalEditItem";
import { ModalRemoveItem } from "../../../features/ModalRemoveItem/ModalRemoveItem";
import './ListItem.css'

interface ListItemProps {
  item: {
    id: string;
    name: string;
    description: string;
    category?: string;
  };
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useSelector(selectAllCategories),
    [editModalActive, setEditModalActive] = useState(false)
  let [removeModalActive, setRemoveModalActive] = useState(false);

  return (
    <>
      <li className="list-item">
        <div className="list-item-container">
          <div className="titleContainer">
            <h3 className="itemTitle">{item.name}</h3>
            {item.category && (
              <span className="itemCategory">
                {
                  categories.find((category) => category.id === item.category)
                    ?.name
                }
              </span>
            )}
          </div>
          <div className="itemDescription">{item.description}</div>
        </div>
        <div className="buttonContainer">
          <button
            className="itemBtn"
            onClick={() => {
              setEditModalActive(true);
            }}
          >
            <img src={edit} alt="edit" />
          </button>
          <button
            className="itemBtn"
            onClick={() => {
              removeModalActive = true;
            }}
          >
            <img src={remove} alt="remove" />
          </button>
        </div>
        <ModalEditItem
          item={item}
          active={editModalActive}
          setActive={setEditModalActive}
        />
        <ModalRemoveItem
          item={item}
          active={removeModalActive}
          setActive={setRemoveModalActive}
        />
      </li>
    </>
  );
};
