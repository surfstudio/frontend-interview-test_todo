/* VENDOR */

/* APPLICATION */
import { ListItem } from "../../shared/ui/ListItem";
import { selectAllCategories } from "./categoriesSlice";
import {useAppSelector} from "../../app/hooks/hooks";

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
