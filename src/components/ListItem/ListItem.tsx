/* VENDOR */
import React, { type FC, useState } from 'react';

/* APPLICATION */
import edit from '../../icons/edit.svg';
import remove from '../../icons/remove.svg';
import { selectAllCategories } from '../../features/categoriesSlice';
import { ModalEditItem } from '../ModalEditItem/ModalEditItem';
import { ModalRemoveItem } from '../ModalRemoveItem/ModalRemoveItem';
import { useAppSelector } from '../../app/hooks';
import { ListItemProps } from './types';
import './ListItem.css';

export const ListItem: FC<ListItemProps> = ({ item }) => {
	const categories = useAppSelector(selectAllCategories);
	const [editModalActive, setEditModalActive] = useState(false);
	const [removeModalActive, setRemoveModalActive] = useState(false);

	return (
		<>
			<li className="list-item">
				<div className="list-item-col1">
					<div className="list-item-col1-row1">
						<h3 className="list-item-col1-row1__title">{item.name}</h3>
						{item.category && (
							<span className="list-item-col1-row1__category">
								{categories.find((category) => category.id === item.category)?.name}
							</span>
						)}
					</div>
					<div className="list-item-col1-row2">{item.description}</div>
				</div>
				<div className="list-item-col2">
					<button
						className="list-item-col2__btn"
						onClick={() => {
							setEditModalActive(true);
						}}
					>
						<img src={edit} alt="edit" />
					</button>
					<button
						className="list-item-col2__btn"
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
