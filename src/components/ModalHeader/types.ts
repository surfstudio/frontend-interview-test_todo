import { Dispatch, SetStateAction } from 'react';

export interface ModalHeaderProps {
	clearState?: () => void;
	setActive: Dispatch<SetStateAction<boolean>>;
	title: string;
}
