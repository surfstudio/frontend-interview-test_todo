/* VENDOR */
import { useState } from 'react';

/* APPLICATION */
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalInput } from './ModalInput';
import { ModalRow } from './ModalRow';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import { tasksAdded } from '../../store/tasksSlice';
import { categoriesAdded } from '../../store/categoriesSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { useCheckPath } from '../../hooks/useCheckPath';

interface ModalCreateItemProps {
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
	active,
	setActive,
}: ModalCreateItemProps) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath();
	const [name, setName] = useState('');
	const [selected, setSelected] = useState('');
	const [description, setDescription] = useState('');

	function clearState() {
		setName('');
		setDescription('');
		setSelected('');
	}

	return (
		<Modal active={active} setActive={setActive} clearState={clearState}>
			<ModalHeader
				clearState={clearState}
				setActive={setActive}
				title={isCategories ? 'Создание категории' : 'Создание задачи'}
			/>
			{isCategories ? (
				<ModalInput name={name} setName={setName} size="large" />
			) : (
				<ModalRow
					name={name}
					setName={setName}
					selected={selected}
					setSelected={setSelected}
				/>
			)}
			<ModalTextarea description={description} setDescription={setDescription} />
			<ModalFooter
				setActive={setActive}
				clearState={clearState}
				submitBtnText="Создать"
				size="large"
				onSubmit={
					name
						? () => {
								dispatch(
									isCategories
										? categoriesAdded({ name, description })
										: tasksAdded({
												name,
												description,
												category: setSelected,
										  })
								);
								clearState();
								setActive(false);
						  }
						: () => {}
				}
			/>
		</Modal>
	);
};
