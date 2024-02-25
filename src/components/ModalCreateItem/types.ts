import { Dispatch, SetStateAction } from 'react';

export interface ModalCreateItemProps {
	active: boolean;
	setActive: Dispatch<SetStateAction<boolean>>;
}
