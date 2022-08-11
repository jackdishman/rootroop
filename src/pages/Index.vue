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
		<div class="absolute z-10">
			<div class="px-12"><img :src="require(`@/assets/images/overlay.png`)" /></div>
			<div class="flex justify-center">
				<router-link
					to="/home"
					class="bg-rooRed text-white px-10 py-1 text-lg mt-48"
					style="border: 2.71389px solid #dc3545; border-radius: 18.9972px"
				>
					ENTER
				</router-link>
			</div>
		</div>
	</div>
</template>
