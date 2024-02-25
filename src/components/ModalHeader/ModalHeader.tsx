import React, { type FC } from 'react';
import close from '../../icons/close.svg';
import { ModalHeaderProps } from './types';

export const ModalHeader: FC<ModalHeaderProps> = ({ clearState, title, setActive }) => {
	return (
		<header className="modal__content-header">
			<h4 className="modal__content-title">{title}</h4>
			<button
				className="modal__content-header__btn"
				onClick={() => {
					clearState && clearState();
					setActive(false);
				}}
			>
				<img src={close} alt="close" />
			</button>
		</header>
	);
};
