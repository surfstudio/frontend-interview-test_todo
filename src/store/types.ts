export interface CategoriesState {
	id: string;
	name: string;
	description: string;
}

export type CategoriesStateNoId = Omit<CategoriesState, 'id'>;
