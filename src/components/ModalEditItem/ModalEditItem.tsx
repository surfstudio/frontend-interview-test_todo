/* VENDOR */
import React, { type FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { ModalRow } from '../ModalRow/ModalRow';
import { ModalInput } from '../ModalInput/ModalInput';
import { ModalTextarea } from '../ModalTextarea/ModalTextarea';
import { ModalFooter } from '../ModalFooter/ModalFooter';
import { tasksUpdated } from '../../features/tasksSlice';
import { categoriesUpdated } from '../../features/categoriesSlice';
import { useAppDispatch } from '../../app/hooks';
import { ModalEditItemProps } from './types';

export const ModalEditItem: FC<ModalEditItemProps> = ({ item, active, setActive }) => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const isCategories = pathname.includes('categories');
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
