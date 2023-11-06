/* VENDOR */
import React from 'react';

/* APPLICATION */
import { categoriesRemoved } from '../../store/categoriesSlice';
import { tasksRemoved, tasksClearedCategories } from '../../store/tasksSlice';
import { useCheckPath } from '../../hooks/useCheckPath';
import { useAppDispatch } from '../../hooks/hooks';
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalText } from './ModalText';
import { ModalFooter } from './ModalFooter';
import type { ModalRemoveItemProps } from './types';

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
	item,
	active,
	setActive,
}) => {
	const dispatch = useAppDispatch();
	const isCategories = useCheckPath();
	const text = `Вы уверены, что хотите удалить задачу "${item.name}"?`;

	return (
		<Modal item={item} active={active} setActive={setActive}>
			<ModalHeader setActive={setActive} title={'Удаление задачи'} />
			<ModalText text={text} />
			<ModalFooter
				setActive={setActive}
				submitBtnText="Да"
				onSubmit={
					isCategories
						? () => {
								dispatch(categoriesRemoved(item));
								dispatch(tasksClearedCategories(item.id));
						  }
						: () => dispatch(tasksRemoved(item.id))
				}
			/>
		</Modal>
	);
};
