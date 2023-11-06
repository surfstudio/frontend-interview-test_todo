/* VENDOR */
import { useLocation } from 'react-router-dom';

export const useCheckPath = (): boolean => {
	const { pathname } = useLocation();
	const isCategories: boolean = pathname.includes('categories');
	return isCategories;
};
