/* VENDOR */
import { useLocation } from 'react-router-dom';

export const useCheckPath = (path: string): boolean =>
	useLocation().pathname.includes(path);
