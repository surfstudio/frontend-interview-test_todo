/* VENDOR */
import React, { useState } from "react";

/* APPLICATION */
import edit from "../../../assets/icons/edit.svg";
import remove from "../../../assets/icons/remove.svg";
import { selectAllCategories } from "../../../pages/Categories/categoriesSlice";
import { ModalEditItem } from "../../../features/ModalEditItem/ModalEditItem";
import { ModalRemoveItem } from "../../../features/ModalRemoveItem/ModalRemoveItem";
import './ListItem.css'
import {useAppSelector} from "../../../app/hooks/hooks";
import {Item} from "../../types/item";

interface ListItemProps {
  item: Item;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const categories = useAppSelector(selectAllCategories),
    [editModalActive, setEditModalActive] = useState(false),
    [removeModalActive, setRemoveModalActive] = useState(false);

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
              setRemoveModalActive(true);
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
