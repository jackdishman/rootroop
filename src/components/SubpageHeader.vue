<script setup lang="ts">
import headerBG from '@/assets/images/headerBG.webp'

defineProps({
	title: {
		type: String,
		required: true,
	},
})
</script>
<template>
	<div class="w-full relative flex items-center justify-center" style="padding-top: 50px">
		<img :src="headerBG" class="w-full" />
		<div class="w-full absolute flex items-center justify-center lg:justify-start h-full">
			<h3 class="text-white text-3xl font-bold italic text-center lg:text-left lg:pl-32">{{ title }}</h3>
		</div>
	</div>
	<div
		class="h-5 mb-10"
		style="background: linear-gradient(90deg, #415c5f -1.84%, #c4cdd5 51.13%, #131d1c 101.94%)"
	></div>
</template>
