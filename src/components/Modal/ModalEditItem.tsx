/* VENDOR */
import React, { useState } from 'react';

/* APPLICATION */
import { categoriesUpdated } from '../../store/categoriesSlice';
import { tasksUpdated } from '../../store/tasksSlice';
import { useCheckPath } from '../../hooks/useCheckPath';
import { useAppDispatch } from '../../hooks/reduxTypedHooks';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalRow } from './ModalRow';
import { ModalInput } from './ModalInput';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import type { ModalEditItemProps } from './types';

export const ModalEditItem: React.FC<ModalEditItemProps> = ({
	item,
	isActive,
	setIsActive,
}) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath('categories');
	const [name, setName] = useState(item.name);
	const [selected, setSelected] = useState(item.category || '');
	const [description, setDescription] = useState(item.description);

	const handleSubmit = () => {
		if (name) {
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
			setIsActive(false);
		}
	};

	return (
		<Modal item={item} isActive={isActive} setIsActive={setIsActive}>
			<ModalHeader
				setIsActive={setIsActive}
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
				setIsActive={setIsActive}
				submitBtnText="Сохранить"
				size="large"
				onSubmit={handleSubmit}
			/>
		</Modal>
	);
};
