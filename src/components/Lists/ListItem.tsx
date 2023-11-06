/* VENDOR */
import React, { useState } from 'react';

/* APPLICATION */
import { selectAllCategories } from '../../store/categoriesSlice';
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import edit from '../../assets/images/edit.svg';
import remove from '../../assets/images/remove.svg';
import { ModalEditItem } from '../Modal/ModalEditItem';
import { ModalRemoveItem } from '../Modal/ModalRemoveItem';

interface ListItemProps {
	id: string;
	name: string;
	description: string;
	category?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
	id,
	name,
	description,
	category,
}) => {
	const categories = useAppSelector(selectAllCategories);
	const [editModalActive, setEditModalActive] = useState(false);
	const [removeModalActive, setRemoveModalActive] = useState(false);

	return (
		<li className="list-item">
			<div className="list-item-col1">
				<div className="list-item-col1-row1">
					<h3 className="list-item-col1-row1__title">{name}</h3>
					{category && (
						<span className="list-item-col1-row1__category">
							{categories.find((categ) => categ.id === category)?.name}
						</span>
					)}
				</div>
				<div className="list-item-col1-row2">{description}</div>
			</div>
			<div className="list-item-col2">
				<button
					className="list-item-col2__btn"
					onClick={() => {
						setEditModalActive(true);
					}}
				>
					<img src={edit} alt="иконка редактирования" />
				</button>
				<button
					className="list-item-col2__btn"
					onClick={() => {
						setRemoveModalActive(true);
					}}
				>
					<img src={remove} alt="иконка удаления" />
				</button>
			</div>
			<ModalEditItem
				item={{ id, name, description, category }}
				active={editModalActive}
				setActive={setEditModalActive}
			/>
			<ModalRemoveItem
				item={{ id, name, description, category }}
				active={removeModalActive}
				setActive={setRemoveModalActive}
			/>
		</li>
	);
};
