/* VENDOR */
import React, { type FC, useState } from 'react';
import { useLocation } from 'react-router-dom';

/* APPLICATION */
import { Modal } from '../Modal/Modal';
import { ModalHeader } from '../ModalHeader/ModalHeader';
import { ModalInput } from '../ModalInput/ModalInput';
import { ModalRow } from '../ModalRow/ModalRow';
import { ModalTextarea } from '../ModalTextarea/ModalTextarea';
import { ModalFooter } from '../ModalFooter/ModalFooter';
import { tasksAdded } from '../../features/tasksSlice';
import { categoriesAdded } from '../../features/categoriesSlice';
import { useAppDispatch } from '../../app/hooks';
import { ModalCreateItemProps } from './types';

export const ModalCreateItem: FC<ModalCreateItemProps> = ({ active, setActive }) => {
	const dispatch = useAppDispatch();
	const { pathname } = useLocation();
	const isCategories = pathname.includes('categories');
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
												category: selected ? selected : '',
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
