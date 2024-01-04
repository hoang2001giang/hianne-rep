<template>
	<div>
		<v-carousel 
			hide-delimiters
			cycle
			height="auto"
			style="{
				aspect-ratio: 5/2;
			}"
		>
			<v-carousel-item
				v-for="item, index in items"
				:src="item.image"
				:key="index"
			>
			</v-carousel-item>
  
	  	</v-carousel>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';


const getImageUrl = (url: string) => {
	return new URL(url, import.meta.url).href
}

export default defineComponent({
	data: () => ({
		items: [
			{
				image: getImageUrl('../../assets/img/home/life_desktop_cc7326f4a51544829b8751ef5e651ff8_2048x2048.webp'),
			},
			{
				image: getImageUrl('../../assets/img/home/freeship_desktop_1__1dccfdaae2bb4193afdc8aed945a5379_2048x2048.webp')
			},
			// {
			// 	image: getImageUrl('../../assets/img/home/slider1.jpg')
			// }
		],
	}),

    mounted() {
    },
})
</script>
