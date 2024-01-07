<template>
	<v-container>
		<div class="text-h4">Categories</div>

		<v-tabs
			align-tabs="start"
			v-model="tab"
		>
			<v-tab
				v-for="category, i in categories"
				:key="i"
				:value="i+1"
			>{{ category.name }}</v-tab>
		</v-tabs>
		<v-window v-model="tab">
			<v-window-item
				v-for="n in 3"
				:key="n"
				:value="n"
			>
				<v-container fluid>
					<v-row>
						<v-col
							v-for="i in 9"
							:key="i"
							class="custom5cols"
						>
							<product-card></product-card>
						</v-col>
					</v-row>
				</v-container>
			</v-window-item>
		</v-window>
		<div class="text-center mt-4">
			<v-btn append-icon="$next">See more</v-btn>
		</div>
	</v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ProductCard from '../ProductCard.vue';
import { Category } from '@/interfaces/category';
import { categoryService } from '@/services/category-service';

export const productCategories: { name: string; thumbnail: string, href: string }[] = [
	{
		href: '#',
		name: 'Son',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Mascara',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Phấn mắt',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Phấn má',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Phấn phủ',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Kẻ mắt, chân mày, môi',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Kem nền',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Kem lót',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Kem chống nắng',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
	{
		href: '#',
		name: 'Kẹp mi',
		thumbnail: 'src/assets/img/shop/1.jpg',
	},
];

export default defineComponent({
	data: () => ({
		categories: [] as Category[],
      	tab: null,
	}),

	async created() {
		this.categories = await categoryService.fetchCategories();
	},

	components: {
		ProductCard,
	}
})
</script>

<style scoped>
.card-image {
	margin: auto;
	margin-top: 15%;
	aspect-ratio: 1;
	width: 70%;
  	border-radius: 50%;
}

.card-text {
	padding-top: 0.5rem;
	height: 2.5rem;
	margin-bottom: 10px;
}
</style>
