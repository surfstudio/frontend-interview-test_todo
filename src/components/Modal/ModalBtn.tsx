/* VENDOR */
import React from 'react';
import clsx from 'clsx';

/* APPLICATION */
import './ModalBtn.css';
import type { ModalBtnProps } from './types';

export const ModalBtn: React.FC<ModalBtnProps> = ({ type, children, size, onClick }) => {
	const btnClass = clsx(
		'modalbtn',
		{
			large: size === 'large',
		},
		{ primary: type === 'primary' }
	);
	return (
		<button className={btnClass} onClick={onClick}>
			{children}
		</button>
	);
};
