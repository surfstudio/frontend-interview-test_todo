/* VENDOR */
import React from 'react';

/* APPLICATION */
import { categoriesRemoved } from '../../store/categoriesSlice';
import { tasksRemoved, tasksClearedCategories } from '../../store/tasksSlice';
import { useCheckPath } from '../../hooks/useCheckPath';
import { useAppDispatch } from '../../hooks/reduxTypedHooks';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalFooter } from './ModalFooter';
import type { ModalRemoveItemProps } from './types';

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
	item,
	isActive,
	setIsActive,
}) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath('categories');
	const handleSubmit = () => {
		if (isCategories) {
			dispatch(categoriesRemoved(item));
			dispatch(tasksClearedCategories(item.id));
		}
		dispatch(tasksRemoved(item.id));
	};

	return (
		<Modal item={item} isActive={isActive} setIsActive={setIsActive}>
			<ModalHeader setIsActive={setIsActive} title={'Удаление задачи'} />
			<p className="modal__content-text">{`Вы уверены, что хотите удалить задачу "${item.name}"?`}</p>
			<ModalFooter setIsActive={setIsActive} submitBtnText="Да" onSubmit={handleSubmit} />
		</Modal>
	);
};
