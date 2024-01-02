<template>
	<v-app id="inspire">
		<v-app-bar
			border
			app
			color="primary"
			dark
		>
  <!--      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />-->
  
			<v-toolbar-title
				style="width: 350px"
			>
				<a href="/" class="white--text" style="text-decoration: none"><v-icon>mdi-truck</v-icon>&nbsp;ShipIT</a>
			</v-toolbar-title>
			<v-text-field
				flat
				solo-inverted
				hide-details
				prepend-inner-icon="mdi-magnify"
				label="Search"
				class="hidden-sm-and-down pl-10 ml-4"
			/>
			<v-spacer />
			<v-btn icon>
				<v-icon>mdi-account-circle</v-icon>
			</v-btn>
			<v-btn icon>
				<v-badge
					content="2"
					value="2"
					color="green"
					overlap
				>
					<v-icon>mdi-bell</v-icon>
				</v-badge>
			</v-btn>
			<v-btn href="/cart" icon>
				<v-badge
					content="2"
					value="2"
					color="green"
					overlap
				>
					<v-icon>mdi-cart</v-icon>
				</v-badge>
			</v-btn>
		</v-app-bar>
		<v-main>
			<router-view/>
		</v-main>
		<v-footer
			:padless="true"
		>
		<v-card
			flat
			tile
			width="100%"
			class="secondary white--text text-center"
		>
		  	<v-card-text>
				<v-btn
					class="mx-4 white--text"
					icon
				>
					<v-icon size="24px">mdi-home</v-icon>
				</v-btn>
				<v-btn
					class="mx-4 white--text"
					icon
				>
					<v-icon size="24px">mdi-email</v-icon>
				</v-btn>
				<v-btn
					class="mx-4 white--text"
					icon
				>
					<v-icon size="24px">mdi-calendar</v-icon>
				</v-btn>
				<v-btn
					class="mx-4 white--text"
					icon
				>
					<v-icon size="24px">mdi-delete</v-icon>
				</v-btn>
	
				</v-card-text>
  
				<v-card-text class="white--text pt-0">
					Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				</v-card-text>
	
				<v-divider></v-divider>
  
				<v-card-text class="white--text">
					{{ new Date().getFullYear() }} — <strong>ShipIT</strong>
				</v-card-text>
			</v-card>
	  	</v-footer>
	</v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	data () {
		return {
				activeBtn: 1,
			}
		},
	})
</script>
