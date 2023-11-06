/* VENDOR */

/* APPLICATION */
import { selectAllTasks } from '../../store/tasksSlice';
import { useAppSelector } from '../../hooks/hooks';
import { ListItem } from './ListItem';

export const Tasks = () => {
	const tasks = useAppSelector(selectAllTasks);

	return (
		<ul>
			{tasks.map((task) => (
				<ListItem key={task.id} {...task} />
			))}
		</ul>
	);
};
