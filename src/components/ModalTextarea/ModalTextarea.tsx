import React, { type FC } from 'react';
import { ModalTextareaProps } from './types';

export const ModalTextarea: FC<ModalTextareaProps> = ({
	description,
	setDescription,
}) => {
	return (
		<div className="modaltextarea-wrapper">
			<label htmlFor="modaltextarea">Описание</label>
			<textarea
				id="modaltextarea"
				className="modaltextarea"
				placeholder="Введите описание задачи"
				value={description}
				onChange={(e) => setDescription(e.target.value)}
			/>
		</div>
	);
};
