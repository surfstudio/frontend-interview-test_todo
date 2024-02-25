/* VENDOR */
import React, { type FC, useState } from 'react';

/* APPLICATION */
import down from '../../icons/down.svg';
import { selectAllCategories } from '../../features/categoriesSlice';
import { ModalDropdownProps } from './types';
import { useAppSelector } from '../../app/hooks';

export const ModalDropdown: FC<ModalDropdownProps> = ({ selected, setSelected }) => {
	const [isActive, setIsActive] = useState(false);
	const options = useAppSelector(selectAllCategories);

	return (
		<div className="dropdown" onClick={() => setIsActive(!isActive)}>
			<span className="dropdown-label">Категория</span>
			<div className={selected ? 'dropdown-btn' : 'dropdown-btn placeholder'}>
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
