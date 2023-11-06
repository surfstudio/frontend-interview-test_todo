/* VENDOR */
import React from 'react';

/* APPLICATION */
import { ModalInput } from './ModalInput';
import { ModalDropdown } from './ModalDropdown';
import type { ModalRowProps } from './types';

export const ModalRow: React.FC<ModalRowProps> = ({
	name,
	setName,
	selected,
	setSelected,
}) => {
	return (
		<div className="modal__content_row">
			<ModalInput name={name} setName={setName} />
			<ModalDropdown selected={selected} setSelected={setSelected} />
		</div>
	);
};
