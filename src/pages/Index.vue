<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
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
	<div class="relative flex items-center justify-center h-screen overflow-hidden">
		<video
			ref="video"
			autoplay
			muted
			loop
			class="absolute z-10 w-auto max-w-screen min-w-full min-h-full max-w-none"
			style="filter: brightness(0.4)"
		>
			<source :src="require(`/src/assets/video/landing.mp4`)" type="video/mp4" />
		</video>
		<div class="absolute z-10 bottom-10 w-full">
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
				<div>
					<img :src="require(`@/assets/images/RooLogo.png`)" class="w-24 flex-shrink-0" />
				</div>
			</div>
		</div>
	</div>
</template>
