/* VENDOR */

/* APPLICATION */
import { selectAllTasks } from '../../store/tasksSlice';
import { useAppSelector } from '../../hooks/hooks';
import { ListItem } from './ListItem';

export const Tasks: React.FC = () => {
	const tasks = useAppSelector(selectAllTasks);

	return (
		<ul>
			{tasks.map((task) => (
				<ListItem key={task.id} item={task} />
			))}
		</ul>
	);
};

// можно попробовать вынести svg в отдельный файл в виде кода
