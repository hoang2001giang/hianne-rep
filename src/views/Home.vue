<template>
	<v-container 
		fluid
		class="pa-0 pt-4"
	>
		<HomeCarousel v-if="showCarousel" class="mb-7"></HomeCarousel>
		<HomeCategory></HomeCategory>
		<ProductSuggest></ProductSuggest>
	  
	  <!-- <v-card  class="accent" >
		<v-container>
		  <v-row no-gutters>
			<v-col class="col-12 col-md-4 col-sm-12">
			  <v-row >
				<v-col class="col-12 col-sm-3 pr-4" align="right">
				  <v-icon class="display-2">mdi-truck</v-icon>
				</v-col>
				<v-col class="col-12 col-sm-9 pr-4">
				  <h3 class="font-weight-light">FREE SHIPPING & RETURN</h3>
								<p class="font-weight-thin">Free Shipping over $300</p>
				</v-col>
			  </v-row>
			</v-col>
			<v-col class="col-12 col-md-4 col-sm-12">
			  <v-row >
				<v-col class="col-12 col-sm-3 pr-4" align="right">
				  <v-icon class="display-2">mdi-cash-usd</v-icon>
				</v-col>
				<v-col  class="col-12 col-sm-9 pr-4">
				  <h3 class="font-weight-light">MONEY BACK GUARANTEE</h3>
				  <p class="font-weight-thin">30 Days Money Back Guarantee</p>
				</v-col>
			  </v-row>
			</v-col>
			<v-col class="col-12 col-md-4 col-sm-12">
			  <v-row>
				<v-col class="col-12 col-sm-3 pr-4" align="right">
				  <v-icon class="display-2">mdi-headset</v-icon>
				</v-col>
				<v-col  class="col-12 col-sm-9 pr-4">
				  <h3 class="font-weight-light">020-800-456-747</h3>
				  <p class="font-weight-thin">24/7 Available Support</p>
				</v-col>
			  </v-row>
			</v-col>
		  </v-row>
		</v-container>
	  </v-card> -->
	</v-container>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { Category } from '@/interfaces/category';
import HomeCarousel from '@/components/home/HomeCarousel.vue';
import HomeCategory from '@/components/home/HomeCategory.vue';
import ProductSuggest from '@/components/home/ProductSuggest.vue';
import {categoryService} from '@/services/category-service';

export default defineComponent ({
	components: {
		HomeCarousel, HomeCategory, ProductSuggest
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