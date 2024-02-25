/* VENDOR */
import React, { type FC } from 'react';

/* APPLICATION */
import './Modal.css';
import { ModalProps } from './types';

export const Modal: FC<ModalProps> = ({ clearState, active, setActive, children }) => {
	return (
		<div
			className={active ? 'modal active' : 'modal'}
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
