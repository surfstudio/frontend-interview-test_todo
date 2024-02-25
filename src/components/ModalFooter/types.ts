import { Dispatch, SetStateAction } from 'react';

export interface ModalFooterProps {
	clearState?: () => void;
	setActive: Dispatch<SetStateAction<boolean>>;
	submitBtnText: string;
	size?: string;
	onSubmit: () => void;
}
