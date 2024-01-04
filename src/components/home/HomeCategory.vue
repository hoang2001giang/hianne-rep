<template>
	<v-slide-group 
		class="pa-4" 
		selected-class="bg-success" 
		show-arrows
	>
		<v-slide-group-item
			v-for="category, index in categories" 
			:key="index" 
		>
			<v-card 
				width="120"
				class="text-center rounded-0 my-1 elevation-0"
				:style="{
					'border': '1px solid rgba(0,0,0,.05)',
					'border-left': index == 0 ? '1px solid rgba(0,0,0,.05)' : 'none',
					// 'background-color': isHovering ? 'red' : 'inherit',
				}"
			>
				<v-img 
					:src="category.thumbnail"
					cover
					class="card-image"
				></v-img>
				<v-card-text 
					class="card-text"
				>
					{{ category.name }}
				</v-card-text>
			</v-card>
		</v-slide-group-item>
	</v-slide-group>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

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
	//   {
	//     href: '#',
	//     name: 'Khác',
	//     thumbnail: '/images/categories/more.svg',
	//   },
];

export default defineComponent({
	data: () => ({
		categories: productCategories,
	}),
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