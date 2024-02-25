import { Dispatch, SetStateAction } from 'react';

export interface ModalRemoveItemProps {
	item: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}
