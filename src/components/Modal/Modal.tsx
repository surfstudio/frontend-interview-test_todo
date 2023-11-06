/* VENDOR */
import React from 'react';
import clsx from 'clsx';

/* APPLICATION */
import './Modal.css';

interface ModalProps {
	item?: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
	clearState?(): void;
}

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
