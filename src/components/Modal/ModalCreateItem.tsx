/* VENDOR */
import React, { useState } from 'react';

/* APPLICATION */
import { categoriesAdded } from 'store/categoriesSlice';
import { tasksAdded } from 'store/tasksSlice';
import { useCheckPath } from 'hooks/useCheckPath';
import { useAppDispatch } from 'hooks/reduxTypedHooks';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalInput } from './ModalInput';
import { ModalRow } from './ModalRow';
import { ModalTextarea } from './ModalTextarea';
import { ModalFooter } from './ModalFooter';
import type { ModalCreateItemProps } from './types';

export const ModalCreateItem: React.FC<ModalCreateItemProps> = ({
	isActive,
	setIsActive,
}) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath('categories');
	const [name, setName] = useState('');
	const [selectedCategory, setSelectedCategory] = useState('');
	const [description, setDescription] = useState('');

	const clearState = () => {
		setName('');
		setDescription('');
		setSelectedCategory('');
	};

	const handleSubmit = () => {
		if (name) {
			dispatch(
				isCategories
					? categoriesAdded({ name, description })
					: tasksAdded({
							name,
							description,
							category: selectedCategory,
					  })
			);
			clearState();
			setIsActive(false);
		}
	};

	return (
		<Modal isActive={isActive} setIsActive={setIsActive} clearState={clearState}>
			<ModalHeader
				clearState={clearState}
				setIsActive={setIsActive}
				title={isCategories ? 'Создание категории' : 'Создание задачи'}
			/>
			{isCategories ? (
				<ModalInput name={name} setName={setName} size="large" />
			) : (
				<ModalRow
					name={name}
					setName={setName}
					selected={selectedCategory}
					setSelected={setSelectedCategory}
				/>
			)}
			<ModalTextarea description={description} setDescription={setDescription} />
			<ModalFooter
				setIsActive={setIsActive}
				clearState={clearState}
				submitBtnText="Создать"
				size="large"
				onSubmit={handleSubmit}
				isDisabled={!name}
			/>
		</Modal>
	);
};
