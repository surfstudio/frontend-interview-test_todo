/* VENDOR */
import React, { useState } from 'react';

/* APPLICATION */
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalRow } from './ModalRow';
import { ModalInput } from './ModalInput';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import { tasksUpdated } from '../../store/tasksSlice';
import { categoriesUpdated } from '../../store/categoriesSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { useCheckPath } from '../../hooks/useCheckPath';

interface ModalEditItemProps {
	item: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
	item,
	active,
	setActive,
}) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath();
	const [name, setName] = useState(item.name);
	const [selected, setSelected] = useState(item.category || '');
	const [description, setDescription] = useState(item.description);

	return (
		<Modal item={item} active={active} setActive={setActive}>
			<ModalHeader
				setActive={setActive}
				title={isCategories ? 'Редактирование категории' : 'Редактирование задачи'}
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
				submitBtnText="Сохранить"
				size="large"
				onSubmit={() => {
					dispatch(
						isCategories
							? categoriesUpdated({ id: item.id, name, description })
							: tasksUpdated({
									id: item.id,
									name,
									description,
									category: selected,
							  })
					);
					setActive(false);
				}}
			/>
		</Modal>
	);
};
