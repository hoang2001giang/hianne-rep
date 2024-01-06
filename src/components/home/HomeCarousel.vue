<template>
	<v-carousel
		cycle
		hide-delimiter-background
		style="{
			aspect-ratio: 5/2;
		}"
	>
		<v-carousel-item
			v-for="item, index in items"
			:key="index"
			:src="item.image"
		>
		</v-carousel-item>

	</v-carousel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


const getImageUrl = (url: string) => {
	return new URL(url, import.meta.url).href;
}

export default defineComponent({
	data: () => ({
		items: [
			{
				image: 'src/assets/img/home/freeship_desktop_1__1dccfdaae2bb4193afdc8aed945a5379_2048x2048.webp'
			},
			{
				image: 'src/assets/img/home/life_desktop_cc7326f4a51544829b8751ef5e651ff8_2048x2048.webp',
			},
		],
	}),

    mounted() {
    },
})
</script>
