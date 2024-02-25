import React, { type FC } from 'react';
import './ModalBtn.css';
import { ModalBtnProps } from './types';

export const ModalBtn: FC<ModalBtnProps> = ({ type, children, size, onClick }) => {
	const btnClass =
		type === 'primary'
			? size === 'large'
				? 'modalbtn primary large'
				: 'modalbtn primary'
			: 'modalbtn';
	return (
		<button className={btnClass} onClick={onClick}>
			{children}
		</button>
	);
};
