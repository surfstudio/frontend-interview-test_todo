export interface CategoriesState {
	id: string;
	name: string;
	description: string;
}

export interface TasksState extends CategoriesState {
	category: string;
}
