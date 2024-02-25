import type { ReactNode } from 'react';

export interface ModalBtnProps {
	type?: string;
	children: ReactNode;
	size?: string;
	onClick: () => void;
}
