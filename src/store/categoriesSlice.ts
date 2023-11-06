/* VENDOR */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/* APPLICATION */
import { initialCategoriesState } from '../data/constants';
import { RootState } from './store';
import type { CategoriesState } from './types';

export const categoriesSlice = createSlice({
	name: 'categories',
	initialState: initialCategoriesState,
	reducers: {
		categoriesAdded: (
			state: CategoriesState[],
			action: PayloadAction<Omit<CategoriesState, 'id'>>
		) => {
			state.push({
				id: uuidv4(),
				...action.payload,
			});
		},
		categoriesUpdated: (
			state: CategoriesState[],
			action: PayloadAction<CategoriesState>
		) => {
			const { id, name, description } = action.payload,
				existingCategory = state.find((category) => category.id === id);

			if (existingCategory) {
				existingCategory.name = name;
				existingCategory.description = description;
			}
		},
		categoriesRemoved: (
			state: CategoriesState[],
			action: PayloadAction<Pick<CategoriesState, 'id'>>
		) => {
			const { id } = action.payload;
			const taskIndexToRemove = state.findIndex((category) => category.id === id);

			if (taskIndexToRemove !== -1) {
				state.splice(taskIndexToRemove, 1);
			}
		},
	},
});

export const { categoriesAdded, categoriesUpdated, categoriesRemoved } =
	categoriesSlice.actions;

export const selectAllCategories = (state: RootState) => state.categories;

export default categoriesSlice.reducer;
