import React, { type FC } from 'react';
import { ModalTextProps } from './types';

export const ModalText: FC<ModalTextProps> = ({ text }) => {
	return <p className="modal__content-text">{text}</p>;
};
