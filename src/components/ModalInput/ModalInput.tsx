import React, { type FC } from 'react';
import important from '../../icons/important.svg';
import { ModalInputProps } from './types';

export const ModalInput: FC<ModalInputProps> = ({ name, setName, size }) => {
	return (
		<div className={size === 'large' ? 'modalinput-wrapper large' : 'modalinput-wrapper'}>
			<input
				id="modalinput"
				className="modalinput"
				placeholder="Введите имя задачи/категории"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<img src={important} alt="important" className="modalinput-icon" />
			<label htmlFor="modalinput">Имя</label>
		</div>
	);
};
