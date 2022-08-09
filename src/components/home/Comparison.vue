<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = ref<string[]>([
	require(`@/assets/images/slider/103.webp`),
	require(`@/assets/images/slider/185.webp`),
	require(`@/assets/images/slider/225.webp`),
	require(`@/assets/images/slider/266.webp`),
	require(`@/assets/images/slider/365.webp`),
	require(`@/assets/images/slider/420.webp`),
	require(`@/assets/images/slider/537.webp`),
	require(`@/assets/images/slider/634.webp`),
	require(`@/assets/images/slider/637.webp`),
	require(`@/assets/images/slider/666.webp`),
	require(`@/assets/images/slider/783.webp`),
	require(`@/assets/images/slider/886.webp`),
	require(`@/assets/images/slider/927.webp`),
	require(`@/assets/images/slider/1069.webp`),
	require(`@/assets/images/slider/1183.webp`),
	require(`@/assets/images/slider/1423.webp`),
	require(`@/assets/images/slider/1454.webp`),
	require(`@/assets/images/slider/1605.webp`),
	require(`@/assets/images/slider/1622.webp`),
	require(`@/assets/images/slider/1818.webp`),
	require(`@/assets/images/slider/2358.webp`),
	require(`@/assets/images/slider/2495.webp`),
	require(`@/assets/images/slider/3227.webp`),
	require(`@/assets/images/slider/3235.webp`),
	require(`@/assets/images/slider/3549.webp`),
	require(`@/assets/images/slider/4031.webp`),
	require(`@/assets/images/slider/4300.webp`),
])
const joeyImages = ref<string[]>([
	require(`@/assets/images/joeys/18.webp`),
	require(`@/assets/images/joeys/22.webp`),
	require(`@/assets/images/joeys/21.webp`),
	require(`@/assets/images/joeys/20.webp`),
	require(`@/assets/images/joeys/19.webp`),
	require(`@/assets/images/joeys/18.webp`),
	require(`@/assets/images/joeys/17.webp`),
	require(`@/assets/images/joeys/16.webp`),
	require(`@/assets/images/joeys/15.webp`),
	require(`@/assets/images/joeys/14.webp`),
	require(`@/assets/images/joeys/13.webp`),
	require(`@/assets/images/joeys/12.webp`),
	require(`@/assets/images/joeys/11.webp`),
	require(`@/assets/images/joeys/10.webp`),
	require(`@/assets/images/joeys/9.webp`),
	require(`@/assets/images/joeys/8.webp`),
	require(`@/assets/images/joeys/7.webp`),
	require(`@/assets/images/joeys/6.webp`),
	require(`@/assets/images/joeys/5.webp`),
	require(`@/assets/images/joeys/4.webp`),
	require(`@/assets/images/joeys/3.webp`),
	require(`@/assets/images/joeys/2.webp`),
	require(`@/assets/images/joeys/1.webp`),
])
</script>

<template>
	<h2 class="font-semibold text-3xl uppercase text-center text-rooBlack px-10 pt-10 pb-10 italic">
		What's the difference?
	</h2>
	<div class="flex justify-center">
		<!-- Roos -->
		<div class="mr-5 bg-rooBlack">
			<div class="flex justify-center mx-10 mt-10 mb-5">
				<span class="w-48 h-48 bg-rooRed">
					<Carousel :items-to-show="1">
						<Slide v-for="img in images" :key="img">
							<img :src="img" class="p-1 carousel__item" />
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</span>
			</div>
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Roo</h5>
			<div class="flex justify-center">
				<p class="w-48 text-white text-xs text-normal leading-5">
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				</p>
			</div>
			<div class="flex justify-center">
				<ul class="text-rooRed w-48 py-5 list-disc list-inside text-sm">
					<li>test</li>
					<li>test</li>
					<li>test</li>
				</ul>
			</div>
			<div class="flex justify-center mb-10">
				<div class="w-36">
					<button class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm" style="border-radius: 7px">
						Buy a Roo
					</button>
					<button
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm"
						style="border-radius: 7px"
					>
						Stake a Roo
					</button>
				</div>
			</div>
		</div>
		<!-- Joeys -->
		<div class="mr-5 bg-rooBlack">
			<div class="flex justify-center mx-10 mt-10 mb-5">
				<span class="w-48 h-48 bg-rooRed">
					<Carousel :items-to-show="1">
						<Slide v-for="img in joeyImages" :key="img">
							<img :src="img" class="p-1 carousel__item" />
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</span>
			</div>
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Roo</h5>
			<div class="flex justify-center">
				<p class="w-48 text-white text-xs text-normal leading-5">
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				</p>
			</div>
			<div class="flex justify-center">
				<ul class="text-rooRed w-48 py-5 list-disc list-inside text-sm">
					<li>test</li>
					<li>test</li>
					<li>test</li>
				</ul>
			</div>
			<div class="flex justify-center mb-10">
				<div class="w-36">
					<button class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm" style="border-radius: 7px">
						Buy a Roo
					</button>
					<button
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm"
						style="border-radius: 7px"
					>
						Stake a Roo
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
	background-color: transparent;
}
.carousel__icon {
	width: 32px;
}
</style>
