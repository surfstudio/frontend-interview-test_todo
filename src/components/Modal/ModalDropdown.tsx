/* VENDOR */
import React, { useState } from 'react';
import clsx from 'clsx';

/* APPLICATION */
import { useAppSelector } from '../../hooks/reduxTypedHooks';
import down from '../../assets/images/down.svg';
import { selectAllCategories } from '../../store/categoriesSlice';
import type { ModalDropdownProps } from './types';

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
	selected,
	setSelected,
}) => {
	const [isActive, setIsActive] = useState(false);
	const categories = useAppSelector(selectAllCategories);
	const placeholderText =
		categories.find((category) => category.id === selected)?.name || 'Выберите категорию';

	return (
		<div className="dropdown" onClick={() => setIsActive(!isActive)}>
			<span className="dropdown-label">Категория</span>
			<div className={clsx('dropdown-btn', { placeholder: !selected })}>
				{placeholderText}
				<img src={down} alt="иконка открытия выпадающего меню" />
			</div>
			{isActive && (
				<div className="dropdown-content">
					{categories.map((category) => (
						<div
							className="dropdown-item"
							onClick={() => {
								setSelected(category.id);
								setIsActive(false);
							}}
							key={category.id}
						>
							{category.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
