<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import { Head } from '@vueuse/head'
const video = ref<HTMLVideoElement>()
const videoHeight = ref<number>(video.value ? video.value?.clientHeight : 0)

function resizeScreen() {
	videoHeight.value = video.value ? video.value?.clientHeight : 0
}

onMounted(() => {
	window.addEventListener(`resize`, (e) => {
		resizeScreen()
	})
	nextTick().then(() => {
		resizeScreen()
	})
})
</script>
<template>
	<Head>
		<meta property="og:image" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta property="og:title" content="Roo Troop" />
		<meta
			property="og:description"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:width" content="3440" />
		<meta property="og:image:height" content="1222" />
	</Head>
	<div class="relative flex items-center justify-center h-screen overflow-hidden bg-black">
		<video
			ref="video"
			autoplay
			muted
			loop
			playsinline
			class="absolute lg:w-auto lg:max-w-screen lg:min-w-full lg:min-h-full lg:max-w-none"
			style="filter: brightness(0.4)"
		>
			<source :src="require(`/src/assets/video/landing.mp4`)" type="video/mp4" />
		</video>
		<!-- Desktop enter -->
		<div class="hidden lg:block absolute z-10 bottom-10 w-full">
			<div class="flex justify-between items-center w-full">
				<div class="w-24"></div>
				<div class="w-24">
					<router-link
						to="/home"
						class="bg-rooRed text-white px-10 py-1 text-lg mt-48 hover:underline"
						style="border: 2.71389px solid #dc3545; border-radius: 18.9972px"
					>
						ENTER
					</router-link>
				</div>
				<div class="mr-10">
					<img :src="require(`@/assets/images/RooLogo.png`)" class="w-24 flex-shrink-0" />
				</div>
			</div>
		</div>
		<!-- Mobile enter -->
		<div class="block lg:hidden">
			<!-- Top icon -->
			<div class="flex w-full justify-center absolute top-24 left-0 right-0">
				<img :src="require(`@/assets/images/RooLogo.png`)" class="w-24 flex-shrink-0" />
			</div>

			<!-- Bottom enter -->
			<div class="absolute z-10 flex justify-center bottom-24 left-0 right-0 w-full">
				<router-link
					to="/home"
					class="bg-rooRed text-white px-10 py-1 text-lg mt-48 hover:underline"
					style="border: 2.71389px solid #dc3545; border-radius: 18.9972px"
				>
					ENTER
				</router-link>
			</div>
			<div class="flex justify-center items-center w-full">
				<div class="w-24"></div>
				<div class="w-24"></div>
			</div>
		</div>
	</div>
</template>
