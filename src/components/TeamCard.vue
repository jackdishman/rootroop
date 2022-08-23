<script setup lang="ts">
import TwitterIcon from '@/components/icons/Twitter.vue'
defineProps({
	imgSrc: {
		type: String,
		required: true,
	},
	screenName: {
		type: String,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	title: {
		type: String,
		required: true,
	},
	twitterURL: {
		type: String,
		default: `https://twitter.com/RooTroopNFT`,
	},
})
</script>

<template>
	<div class="flex flex-col items-center">
		<div class="bg-rooRed p-1">
			<img :src="imgSrc" class="w-28 h-28" />
		</div>
		<h3 class="font-medium text-white text-lg italic">{{ screenName }}</h3>
		<h6 class="font-semibold text-sm italic text-white">{{ name }}</h6>
		<h6 class="font-semibold text-sm italic text-rooRed">{{ title }}</h6>
		<a v-if="twitterURL !== ''" :href="twitterURL" class="pt-2 text-white">
			<TwitterIcon />
		</a>
	</div>
</template>
