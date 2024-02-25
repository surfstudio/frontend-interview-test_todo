import React, { type FC } from 'react';
import { ModalInput } from '../ModalInput/ModalInput';
import { ModalDropdown } from '../ModalDropdown/ModalDropdown';
import { ModalRowProps } from './types';

export const ModalRow: FC<ModalRowProps> = ({ name, setName, selected, setSelected }) => {
	return (
		<div className="modal__content_row">
			<ModalInput name={name} setName={setName} />
			<ModalDropdown selected={selected} setSelected={setSelected} />
		</div>
	);
};
