export interface ModalProps {
	item?: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	children: React.ReactNode;
	clearState?(): void;
}

export interface ModalBtnProps {
	type?: string;
	children: React.ReactNode;
	size?: string;
	onClick: () => void;
}

export interface ModalCreateItemProps {
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalDropdownProps {
	selected: string | undefined;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalEditItemProps {
	item: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalFooterProps {
	clearState?(): void;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	submitBtnText: string;
	size?: string;
	onSubmit: () => void;
}

export interface ModalHeaderProps {
	clearState?(): void;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
	title: string;
}

export interface ModalInputProps {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	size?: string;
}

export interface ModalRemoveItemProps {
	item: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	isActive: boolean;
	setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ModalRowProps {
	name: string;
	setName: React.Dispatch<React.SetStateAction<string>>;
	selected: string | undefined;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

export interface ModalTextareaProps {
	description: string;
	setDescription: React.Dispatch<React.SetStateAction<string>>;
}
