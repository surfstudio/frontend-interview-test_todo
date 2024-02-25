import { Dispatch, SetStateAction } from 'react';

export interface ModalTextareaProps {
	description: string;
	setDescription: Dispatch<SetStateAction<string>>;
}
