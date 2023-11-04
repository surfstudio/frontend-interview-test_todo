/* VENDOR */
import { useAppSelector } from '../../hooks/hooks';

/* APPLICATION */
import { ListItem } from './ListItem';
import { selectAllCategories } from '../../store/categoriesSlice';

export const Categories = () => {
	const categories = useAppSelector(selectAllCategories);

	return (
		<ul>
			{categories.map((category) => (
				<ListItem key={category.id} item={category} />
			))}
		</ul>
	);
};
