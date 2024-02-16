<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
// images
import image1 from '@/assets/images/jobs/image1.webp'
import image2 from '@/assets/images/jobs/image2.webp'
import image3 from '@/assets/images/jobs/image3.webp'
import image4 from '@/assets/images/jobs/image4.webp'
</script>

<template>
	<div class="flex flex-col md:flex-row md:justify-center md:pb-24 w-full my-12 py-14 px-12 xl:px-24">
		<!-- Left side: title and description -->
		<div class="w-full xl:w-2/3 pr-5 xl:pb-16">
			<h2 class="uppercase text-4xl font-bold italic">Job Marketplace</h2>
			<div class="my-4 font-bold italic"><RedUnderscore /></div>
			<p class="mb-4">
				The MISSION of Roo Troop is to UNITE A COMMUNITY that is eager to build in Web 3 and RESHAPE THE FUTURE OF
				RECRUITMENT with our revolutionary talent acquisition platform, powered by blockchain technology.
			</p>
			<div class="flex flex-col xl:flex-row items-center xl:items-start">
				<div>
					<a
						href="https://seekr.io/"
						target="_blank"
						class="rounded-lg text-white font-semibold bg-rooRed px-6 py-2 text-sm"
						>SEARCH FOR JOBS
					</a>
				</div>
				<div class="xl:ml-6 mt-6 xl:mt-0">
					<a
						href="https://seekr.io/contact"
						target="_blank"
						class="rounded-lg text-white font-semibold bg-rooRed px-6 py-2 text-sm"
						>POST JOBS</a
					>
				</div>
			</div>
			<div class="mt-10 text-xl">
				<a href="https://seekr.io/" target="_blank" class="underline text-rooRed italic font-semibold uppercase"
					>Sign Up for Seekr</a
				>
			</div>
		</div>
		<!-- Right side: floating images -->
		<div class="relative w-full max-w-full xl:w-1/3 -mt-6 -ml-12 sm:-ml-0 xl:mt-0 hidden md:block">
			<img :src="image1" class="absolute top-0 w-64 left-0" />
			<img :src="image2" class="absolute top-16 w-64 left-16" />
			<img :src="image3" class="absolute top-32 w-64 left-32" />
			<img :src="image4" class="absolute top-48 w-64 left-24" />
		</div>
	</div>
</template>
