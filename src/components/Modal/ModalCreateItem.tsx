/* VENDOR */
import React, { useState } from 'react';

/* APPLICATION */
import { categoriesAdded } from '../../store/categoriesSlice';
import { tasksAdded } from '../../store/tasksSlice';
import { useCheckPath } from '../../hooks/useCheckPath';
import { useAppDispatch } from '../../hooks/hooks';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalInput } from './ModalInput';
import { ModalRow } from './ModalRow';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import type { ModalCreateItemProps } from './types';

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
	active,
	setActive,
}) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath('categories');
	const [name, setName] = useState('');
	const [selected, setSelected] = useState('');
	const [description, setDescription] = useState('');

	const clearState = () => {
		setName('');
		setDescription('');
		setSelected('');
	};

	const handleSubmit = () => {
		if (name) {
			dispatch(
				isCategories
					? categoriesAdded({ name, description })
					: tasksAdded({
							name,
							description,
							category: selected,
					  })
			);
			clearState();
			setActive(false);
		}
	};

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
				onSubmit={handleSubmit}
			/>
		</Modal>
	);
};
