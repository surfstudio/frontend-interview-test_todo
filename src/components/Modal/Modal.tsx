/* VENDOR */
import React from 'react';
import clsx from 'clsx';

/* APPLICATION */
import './Modal.css';
import type { ModalProps } from './types';

export const Modal: React.FC<ModalProps> = ({
	clearState,
	active,
	setActive,
	children,
}) => {
	return (
		<div
			className={clsx('modal', { modal_active: active })}
			onClick={() => {
				clearState && clearState();
				setActive(false);
			}}
		>
			<div className="modal__content" onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};
