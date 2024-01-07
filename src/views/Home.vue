<template>
	<v-container 
		fluid
		class="pa-0 pt-4"
	>
		<HomeCarousel v-if="showCarousel" class="mb-7"></HomeCarousel>
		<v-container>
			<div class="text-h4">Hot</div>
			<v-container fluid>
				<v-row>
					<v-col
						v-for="i in 3"
						:key="i"
						class="custom5cols"
					>
						<product-card></product-card>
					</v-col>
				</v-row>
			</v-container>
			<div class="text-center mt-4">
				<v-btn append-icon="$next">See more</v-btn>
			</div>
		</v-container>
		<v-container class="pt-10">
			<div class="text-h4">New Arrivals</div>
			<v-container fluid>
				<v-row>
					<v-col
						v-for="i in 3"
						:key="i"
						class="custom5cols"
					>
						<product-card></product-card>
					</v-col>
				</v-row>
			</v-container>
			<div class="text-center mt-4">
				<v-btn append-icon="$next">See more</v-btn>
			</div>
		</v-container>
		<HomeCategory class="pt-10"></HomeCategory>
		<ProductSuggest></ProductSuggest>
	  
	</v-container>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { Category } from '@/interfaces/category';
import HomeCarousel from '@/components/home/HomeCarousel.vue';
import HomeCategory from '@/components/home/HomeCategory.vue';
import ProductSuggest from '@/components/home/ProductSuggest.vue';
import {categoryService} from '@/services/category-service';
import ProductCard from '@/components/ProductCard.vue';

export default defineComponent ({
	components: {
		HomeCarousel, HomeCategory, ProductSuggest, ProductCard
	},

	data: () => ({
		showCarousel: true,
		categories: [] as Category[],
	}),

	async created() {
		this.categories = await categoryService.fetchCategories();
	},
});
</script>

<style>
.custom5cols {
	width: 20%;
	max-width: 20%;
	flex-basis: 20%;
}
</style>