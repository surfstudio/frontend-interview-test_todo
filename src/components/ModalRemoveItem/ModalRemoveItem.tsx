/* VENDOR */
import React, { type FC } from 'react';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { ModalText } from '../ModalText/ModalText';
import { ModalFooter } from '../ModalFooter/ModalFooter';
import { tasksRemoved, tasksClearedCategories } from '../../features/tasksSlice';
import { categoriesRemoved } from '../../features/categoriesSlice';
import { useAppDispatch } from '../../app/hooks';
import { ModalRemoveItemProps } from './types';

export const ModalRemoveItem: FC<ModalRemoveItemProps> = ({
	item,
	active,
	setActive,
}) => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const isCategories = pathname.includes('categories');
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
								dispatch(categoriesRemoved(item.id));
								dispatch(tasksClearedCategories(item.id));
							}
						: () => dispatch(tasksRemoved(item.id))
				}
			/>
		</Modal>
	);
};
