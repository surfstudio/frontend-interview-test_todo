import type { CategoriesStateWithCategory } from '../store/types';

export const initialState: CategoriesStateWithCategory[] = [
	{
		id: 'dcf6c7ea-56fe-4e36-960b-686ebf86d651',
		name: 'Задача',
		description: 'Описание может быть длинным',
		category: 'd485a644-5a24-4f55-b3f7-a083338be879',
	},
	{
		id: '8c90d466-4d2b-4813-a5b4-110b014bf7f2',
		name: 'Задача2',
		description: 'Описание может быть длинным',
		category: '52f7451a-0f06-4ddc-affa-b1d8ed24aee3',
	},
	{
		id: '5a034ea1-6159-4805-a4be-e8c160d8ef10',
		name: 'Задача3',
		description: 'Описание может быть длинным',
		category: '36704c57-4575-4112-b962-948b04a20506',
	},
];
