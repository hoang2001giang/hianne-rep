<template>
	<v-card
		elevation=0
	>
		<v-img
			:src="image"
			aspect-ratio=3/4
			cover
		></v-img>
		<div>
			<a href="#" class="product-title">
				{{ name }}
			</a>
		</div>
		<div class="text--primary">
			{{ price }}
		</div>
	</v-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	data: () => ({
		image: 'src/assets/img/home/deal1.jpg',
		price: '40000',
		name: 'son duong am'
	})
})
</script>

<style scoped>
.product-title {
	text-decoration: none;
	color: inherit;
}
.product-title:hover {
	color: blue;
}
</style>