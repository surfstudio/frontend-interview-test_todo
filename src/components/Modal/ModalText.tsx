interface ModalTextProps {
	text: string;
}

export const ModalText: React.FC<ModalTextProps> = ({ text }: ModalTextProps) => {
	return <p className="modal__content-text">{text}</p>;
};
