/* VENDOR */

/* APPLICATION */
import { Modal } from './Modal';
import { ModalHeader } from './ModalHeader';
import { ModalText } from './ModalText';
import { ModalFooter } from './ModalFooter';
import { tasksRemoved, tasksClearedCategories } from '../../store/tasksSlice';
import { categoriesRemoved } from '../../store/categoriesSlice';
import { useAppDispatch } from '../../hooks/hooks';
import { useCheckPath } from '../../hooks/useCheckPath';

interface ModalRemoveItemProps {
	item: {
		id: string;
		name: string;
		description: string;
		category?: string;
	};
	active: boolean;
	setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ModalRemoveItem: React.FC<ModalRemoveItemProps> = ({
	item,
	active,
	setActive,
}: ModalRemoveItemProps) => {
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
								dispatch(categoriesRemoved(item.id));
								dispatch(tasksClearedCategories(item.id));
						  }
						: () => dispatch(tasksRemoved(item.id))
				}
			/>
		</Modal>
	);
};
