import { Category } from "@/interfaces/category";

export interface FetchCategoryParams {
}

class CategoryProvider {
	ApiEnpoint = 'http://localhost:3000/api/categories';

	async fetchCategories() {
		const categories: Category[] = await fetch(this.ApiEnpoint).then(res => res.json());
		console.log(categories);
		return categories;
	}

}

export const categoryService = new CategoryProvider();