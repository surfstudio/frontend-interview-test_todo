/* VENDOR */
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

/* APPLICATION */
import "./Header.css";
import { ModalCreateItem } from "../Modal/ModalCreateItem";

export const Header = () => {
  const [isModalActive, setIsModalActive] = useState<boolean>(false);

  const { pathname } = useLocation();
  const isCategories = pathname.includes("categories");

  const buttonText = isCategories ? "Добавить категорию" : "Добавить задачу";

  const handleActive = () => {
    setIsModalActive(true);
  };

  return (
    <header className="header">
      <h1 className="header-title">ToDo List</h1>
      <nav className="header-nav">
        <ul className="header-list">
          <li
            className={
              !isCategories
                ? "header-list-item header-list-item-active"
                : "header-list-item"
            }
          >
            <Link to="tasks">Задачи</Link>
          </li>
          <li
            className={
              isCategories
                ? "header-list-item header-list-item-active"
                : "header-list-item"
            }
          >
            <Link to="categories">Категории</Link>
          </li>
        </ul>
        <button className="header-button" onClick={handleActive}>
          {buttonText}
        </button>
      </nav>
      <ModalCreateItem
        isActive={isModalActive}
        setIsActive={setIsModalActive}
      />
    </header>
  );
};
