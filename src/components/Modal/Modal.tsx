/* VENDOR */
import React from 'react';
import clsx from 'clsx';

/* APPLICATION */
import './Modal.css';
import type { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
	clearState,
	isActive,
	setIsActive,
	children,
}) => {
	const handleClick = () => {
		clearState?.();
		setIsActive(false);
	};

	return (
		<div className={clsx('modal', { modal_active: isActive })} onClick={handleClick}>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
