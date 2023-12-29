<template>
  <div>
    Hello
  </div>
</template>

<script lang="ts">
import { productService } from '@/services/product-service';
import { defineComponent } from 'vue';
import { Product } from '@/interfaces/product';
export default defineComponent ({
    data: () => ({
		products: [] as Product[],
    }),

	async created() {
		this.products = await productService.fetchProducts();
		console.log(this.products);
	}
})
</script>
