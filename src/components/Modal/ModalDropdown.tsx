/* VENDOR */
import React, { useState } from 'react';
import clsx from 'clsx';

/* APPLICATION */
import { useAppSelector } from '../../hooks/hooks';
import down from '../../assets/images/down.svg';
import { selectAllCategories } from '../../store/categoriesSlice';
import type { ModalDropdownProps } from './types';

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
	selected,
	setSelected,
}) => {
	const [isActive, setIsActive] = useState(false),
		options = useAppSelector(selectAllCategories);

	return (
		<div className="dropdown" onClick={() => setIsActive(!isActive)}>
			<span className="dropdown-label">Категория</span>
			<div className={clsx('dropdown-btn', { placeholder: !selected })}>
				{options.find((option) => option.id === selected)?.name || 'Выберите категорию'}
				<img src={down} alt="open dropdown" />
			</div>
			{isActive && (
				<div className="dropdown-content">
					{options.map((option) => (
						<div
							className="dropdown-item"
							onClick={() => {
								setSelected(option.id);
								setIsActive(false);
							}}
							key={option.id}
						>
							{option.name}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
