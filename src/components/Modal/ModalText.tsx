/* VENDOR */
import React from 'react';
import type { ModalTextProps } from './types';

export const ModalText: React.FC<ModalTextProps> = ({ text }) => {
	return <p className="modal__content-text">{text}</p>;
};
