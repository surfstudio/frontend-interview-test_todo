import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ModalProps {
	item?: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
	children: ReactNode;
	clearState?(): void;
}
