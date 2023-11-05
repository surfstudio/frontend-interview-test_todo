export interface CategoriesState {
	id: string;
	name: string;
	description: string;
}

export interface CategoriesStateWithCategory extends CategoriesState {
	category: string;
}
