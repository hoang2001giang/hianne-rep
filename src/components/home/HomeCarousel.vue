<template>
	<div>
		<v-carousel 
			hide-delimiters 
			@load="setHeight" 
			:style="{ height: innerHeight + 'px' }"
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

		innerHeight: 500,
	}),

	methods: {
		setHeight(event: Event) {
  			console.log("page is fully loaded");
			var component = event.target as HTMLElement;
			console.log(component);
			this.innerHeight = component.clientWidth * 0.5;
		}
	}
})
</script>

<style scoped>

</style>