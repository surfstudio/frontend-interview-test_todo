/* VENDOR */
import React from 'react';

/* APPLICATION */
import { ModalBtn } from './ModalBtn';
import type { ModalFooterProps } from './types';

export const ModalFooter: React.FC<ModalFooterProps> = ({
	clearState,
	setActive,
	submitBtnText,
	size,
	onSubmit,
}) => {
	return (
		<div className="modal__content-footer">
			<ModalBtn type="primary" size={size || ''} onClick={onSubmit}>
				{submitBtnText}
			</ModalBtn>
			<ModalBtn
				onClick={() => {
					clearState && clearState();
					setActive(false);
				}}
			>
				Закрыть
			</ModalBtn>
		</div>
	);
};
