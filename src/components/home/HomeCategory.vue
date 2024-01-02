<template>
	<div>
		<v-row class="pl-4 pr-4 row">
			<v-col
				class="col-md-6 col-sm-6 col-xs-12"
			>
				<v-card>
	
					<v-img
						src="@/assets/img/home/slider2.jpg"
						class="white--text align-center"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="400px"
					>
					<h1 class="text-center font-size">Top Picks</h1>
						<div class="text-center">
							<v-btn  href="/shop" class="white--text " outlined>SHOP NOW</v-btn>
						</div>
					</v-img>
				</v-card>
			</v-col>
			<v-col
				class="col-md-6 col-sm-6 col-xs-12"
			>
				<v-card>
					<v-img
						src="@/assets/img/home/slider3.jpg"
						class="white--text align-center"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="400px"
					>
						<h1 class="text-center font-size">New Arrivals</h1>
						<div class="text-center">
							<v-btn  href="/shop" class="white--text" outlined>SHOP NOW</v-btn>
						</div>
					</v-img>
				</v-card>
			</v-col>
	  	</v-row>
	  	<v-row class="pl-4 pr-4 row">
			<div
				class="col-md-4 col-sm-4 col-xs-12"
			>
				<v-card outlined>
					<v-img
						src="@/assets/img/home/deal2.jpg"
						class="white--text align-center"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="300px"
					>
					<h1 class="text-center font-size">Lorem & Ipsum</h1>
					<div class="text-center mt-2">
						<v-btn class="white--text caption"  href="/shop" variant="text">SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
					</div>
					</v-img>
				</v-card>
			</div>
			<div
				class="col-md-4 col-sm-4 col-xs-12"
			>
				<v-card outlined>
					<v-img
						src="@/assets/img/home/deal3.jpg"
						class="white--text align-center"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="300px"
					>
						<h1 class="text-center font-size">Lorem & Ipsum</h1>
						<div class="text-center mt-2">
							<v-btn class="white--text caption"  href="/shop" variant="text">SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
						</div>
					</v-img>
				</v-card>
			</div>
			<div
				class="col-md-4 col-sm-4 col-xs-12"
			>
				<v-card outlined>
					<v-img
						src="@/assets/img/home/deal4.jpg"
						class="white--text align-center"
						gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
						height="300px"
					>
						<h1 class="text-center font-size">Lorem & Ipsum</h1>
						<div class="text-center mt-2">
							<v-btn class="white--text caption"  href="/shop" variant="text">SHOP NOW <v-icon class="white--text caption">mdi-arrow-right</v-icon></v-btn>
						</div>
					</v-img>
				</v-card>
			</div>
	  	</v-row>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	
})
</script>

<style scoped>

</style>