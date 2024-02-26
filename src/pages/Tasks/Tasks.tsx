/* VENDOR */

/* APPLICATION */
import { ListItem } from "../../shared/ui/ListItem";
import { selectAllTasks } from "./tasksSlice";
import {useAppSelector} from "../../app/hooks/hooks";

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
