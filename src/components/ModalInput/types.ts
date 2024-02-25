import { Dispatch, SetStateAction } from 'react';

export interface ModalInputProps {
	name: string;
	setName: Dispatch<SetStateAction<string>>;
	size?: string;
}
