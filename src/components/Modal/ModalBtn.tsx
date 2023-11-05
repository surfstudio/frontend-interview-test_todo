import './ModalBtn.css';
import clsx from 'clsx';

interface ModalBtnProps {
	type?: string;
	children: React.ReactNode;
	size?: string;
	onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
	type,
	children,
	size,
	onClick,
}: ModalBtnProps) => {
	const btnClass = clsx(
		'modalbtn',
		{
			large: size === 'large',
		},
		{ primary: type === 'primary' }
	);
	return (
		<button className={btnClass} onClick={onClick}>
			{children}
		</button>
	);
};
