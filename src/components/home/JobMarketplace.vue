<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
</script>

<template>
	<div class="flex flex-row justify-center w-full my-12">
		<!-- Left side: title and description -->
		<div class="w-2/3 pr-5">
			<h2 class="uppercase text-4xl">Job Marketplace</h2>
			<div class="my-4 font-bold italic"><RedUnderscore /></div>
			<p class="mb-6">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
				magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
				pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
				laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
				dolore magna aliqua.
			</p>
			<button class="rounded-lg text-white font-semibold bg-rooRed w-28 py-1 text-sm">Jobs</button>
		</div>
		<!-- Right side: floating images -->
		<div class="relative w-1/3">
			<img :src="require(`@/assets/images/jobs/image1.webp`)" class="absolute top-0 left-0" />
			<img :src="require(`@/assets/images/jobs/image2.webp`)" class="absolute top-16 left-16" />
			<img :src="require(`@/assets/images/jobs/image3.webp`)" class="absolute top-32 left-32" />
			<img :src="require(`@/assets/images/jobs/image4.webp`)" class="absolute top-48 left-24" />
		</div>
	</div>
</template>
