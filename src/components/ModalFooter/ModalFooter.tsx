import React, { type FC } from 'react';
import { ModalBtn } from '../ModalBtn/ModalBtn';
import { ModalFooterProps } from './types';

export const ModalFooter: FC<ModalFooterProps> = ({
	clearState,
	setActive,
	submitBtnText,
	size,
	onSubmit,
}) => {
	return (
		<footer className="modal__content-footer">
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
		</footer>
	);
};
