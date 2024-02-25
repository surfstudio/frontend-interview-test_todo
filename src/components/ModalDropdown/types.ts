import { Dispatch, SetStateAction } from 'react';

export interface ModalDropdownProps {
	selected: string | undefined;
	setSelected: Dispatch<SetStateAction<string>>;
}
