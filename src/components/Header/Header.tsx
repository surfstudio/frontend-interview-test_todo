/* VENDOR */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

/* APPLICATION */
import './Header.css';
import { ModalCreateItem } from '../Modal/ModalCreateItem';
import { useCheckPath } from '../../hooks/useCheckPath';

export const Header = () => {
	const isCategories = useCheckPath();
	const isTasks = !isCategories;
	const [createModalActive, setCreateModalActive] = useState(false);

	return (
		<header className="header">
			<h1 className="header-title">ToDo List</h1>
			<nav className="header-nav">
				<ul className="header-list">
					<li
						className={clsx('header-list-item', {
							'header-list-item-active': isTasks,
						})}
					>
						<Link to="tasks">Задачи</Link>
					</li>
					<li
						className={clsx('header-list-item', {
							'header-list-item-active': isCategories,
						})}
					>
						<Link to="categories">Категории</Link>
					</li>
				</ul>
			</nav>
			<button
				className="header-button"
				onClick={() => {
					setCreateModalActive(true);
				}}
			>
				{isCategories ? 'Добавить категорию' : 'Добавить задачу'}
			</button>
			<ModalCreateItem active={createModalActive} setActive={setCreateModalActive} />
		</header>
	);
};
