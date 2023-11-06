/* VENDOR */

/* APPLICATION */
import { selectAllCategories } from '../../store/categoriesSlice';
import { useAppSelector } from '../../hooks/hooks';
import { ListItem } from './ListItem';

export const Categories = () => {
	const categories = useAppSelector(selectAllCategories);

	return (
		<ul>
			{categories.map((category) => (
				<ListItem key={category.id} {...category} />
			))}
		</ul>
	);
};
