<script lang="ts">
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
	name: 'RooCarousel',
	components: {
		Carousel,
		Slide,
		// Navigation,
	},
	data: () => ({
		// carousel settings
		settings: {
			itemsToShow: 1,
			snapAlign: 'center',
		},
		// breakpoints are mobile first
		// any settings not specified will fallback to the carousel settings
		breakpoints: {
			// 700px and up
			700: {
				itemsToShow: 4.5,
				snapAlign: 'center',
			},
			// 1024 and up
			1024: {
				itemsToShow: 6.5,
				snapAlign: 'start',
			},
			1440: {
				itemsToShow: 9.5,
				snapAlign: 'start',
			},
		},
		images: [],
	}),
	mounted() {
		const path = require.context('@/assets/images/slider/', true, /\.webp$/)
		this.images = path.keys().map(path) as []

		// const images = importAll(require.context('../assets/images/slider/', true, /\.webp$/))
		// console.log(images)
	},
})
</script>

<template>
	<div class="relative">
		<div class="absolute h-full w-full py-2 carousel-background"></div>
		<div class="py-4">
			<Carousel
				:settings="settings"
				:breakpoints="breakpoints"
				:autoplay="2000"
				:items-to-show="3.5"
				:wrap-around="true"
			>
				<Slide v-for="i in images" :key="i">
					<div class="carousel__item px-4">
						<img class="selector w-32 h-32" :src="i" />
					</div>
				</Slide>
			</Carousel>
		</div>
	</div>
</template>

<style>
.carousel__prev--in-active,
.carousel__next--in-active {
	display: none;
}
.selector {
	user-drag: none;
	-webkit-user-drag: none;
	user-select: none;
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
}
.carousel-background {
	background: linear-gradient(92.67deg, #1b1e1e -7.06%, #5f839b 16.92%, #a4aeb7 51.45%, #708da2 77.14%, #191e1d 100%);
}
</style>
