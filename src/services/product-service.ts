import { Product } from "@/interfaces/product";

export interface FetchProductParams {
	slug: string,
	category: string
}

class ProductProvider {
	ApiEnpoint = 'http://localhost:3000/api/products';

	async fetchProducts() {
		const products: Product[] = await fetch(this.ApiEnpoint).then(res => res.json());
		console.log(products);
		return products;
	}

	async fetchProduct(params: FetchProductParams) {
		console.log(`${this.ApiEnpoint}/${encodeURI(params.slug)}?category=${params.category}`);
		const product: Product = await fetch(`${this.ApiEnpoint}/${encodeURI(params.slug)}?category=${params.category}`).then(res => res.json());
		return product;
	}

}

export const productService = new ProductProvider();