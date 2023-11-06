/* VENDOR */
import React from 'react';

/* APPLICATION */
import close from '../../assets/images/close.svg';
import type { ModalHeaderProps } from './types';

export const ModalHeader: React.FC<ModalHeaderProps> = ({
	clearState,
	title,
	setActive,
}) => {
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
				<img src={close} alt="иконка закрытия" />
			</button>
		</header>
	);
};
