/* VENDOR */
import React, { type FC } from 'react';

/* APPLICATION */
import { ListItem } from '../ListItem/ListItem';
import { selectAllTasks } from '../../features/tasksSlice';
import { useAppSelector } from '../../app/hooks';

export const Tasks: FC = () => {
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
