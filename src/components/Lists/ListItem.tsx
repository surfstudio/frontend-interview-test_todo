/* VENDOR */
import React, { useState } from 'react';

/* APPLICATION */
import { selectAllCategories } from 'store/categoriesSlice';
import { useAppSelector } from 'hooks/reduxTypedHooks';
import edit from 'assets/images/edit.svg';
import remove from 'assets/images/remove.svg';
import { ModalEditItem } from '../Modal/ModalEditItem';
import { ModalRemoveItem } from '../Modal/ModalRemoveItem';
import type { ListItemProps } from './types';

export const ListItem: React.FC<ListItemProps> = ({
	id,
	name,
	description,
	category,
}) => {
	const categories = useAppSelector(selectAllCategories);
	const [isEditModalActive, setIsEditModalActive] = useState(false);
	const [isRemoveModalActive, setIsRemoveModalActive] = useState(false);

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
						setIsEditModalActive(true);
					}}
				>
					<img src={edit} alt="иконка редактирования" />
				</button>
				<button
					className="list-item-col2__btn"
					onClick={() => {
						setIsRemoveModalActive(true);
					}}
				>
					<img src={remove} alt="иконка удаления" />
				</button>
			</div>
			<ModalEditItem
				item={{ id, name, description, category }}
				isActive={isEditModalActive}
				setIsActive={setIsEditModalActive}
			/>
			<ModalRemoveItem
				item={{ id, name, description, category }}
				isActive={isRemoveModalActive}
				setIsActive={setIsRemoveModalActive}
			/>
		</li>
	);
};
