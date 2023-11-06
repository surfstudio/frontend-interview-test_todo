/* VENDOR */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

/* APPLICATION */
import { initialTasksState } from '../data/constants';
import { RootState } from './store';
import type { TasksState } from './types';

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState: initialTasksState,
	reducers: {
		tasksAdded: (state: TasksState[], action: PayloadAction<Omit<TasksState, 'id'>>) => {
			state.push({
				id: uuidv4(),
				...action.payload,
			});
		},
		tasksUpdated: (state: TasksState[], action: PayloadAction<TasksState>) => {
			const { id, name, description, category } = action.payload,
				existingTask = state.find((task) => task.id === id);

			if (existingTask) {
				existingTask.name = name;
				existingTask.description = description;
				existingTask.category = category;
			}
		},
		tasksRemoved: (state: TasksState[], action: PayloadAction<string>) => {
			const id = action.payload;
			const categoryIndexToRemove = state.findIndex((category) => category.id === id);

			if (categoryIndexToRemove !== -1) {
				state.splice(categoryIndexToRemove, 1);
			}
		},
		tasksClearedCategories: (state, action) => {
			state.forEach((task) => {
				if (task.category === action.payload) task.category = '';
			});
		},
	},
});

export const { tasksAdded, tasksUpdated, tasksRemoved, tasksClearedCategories } =
	tasksSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasks;

export default tasksSlice.reducer;
