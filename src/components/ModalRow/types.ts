import { Dispatch, SetStateAction } from 'react';

export interface ModalRowProps {
	name: string;
	setName: Dispatch<SetStateAction<string>>;
	selected: string | undefined;
	setSelected: Dispatch<SetStateAction<string>>;
}
