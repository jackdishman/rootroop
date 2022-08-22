<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
</script>

<template>
	<div class="flex flex-row justify-center w-full my-12 py-14 px-24">
		<!-- Left side: title and description -->
		<div class="w-2/3 pr-5">
			<h2 class="uppercase text-4xl font-bold italic">Job Marketplace</h2>
			<div class="my-4 font-bold italic"><RedUnderscore /></div>
			<p class="mb-4">
				Roo Troop is developing the first on-chain job marketplace. Think Indeed or Glassdoor but with proof of work
				experience, proof of employment history, and proof of skills, all undeniably verifiable on-chain.
			</p>
			<p class="mb-6">
				While that is in development, we've been using the Roo Troop Bounty Hub to post several hundred job listings and
				we've successfully placed over 100 members of the community in paid roles.
			</p>
			<a
				href="https://forms.gle/uL1hgbvu8nEUZHJdA"
				target="_blank"
				class="rounded-lg text-white font-semibold bg-rooRed px-6 py-2 text-sm"
				>SEARCH FOR JOBS | POST JOBS (FREE)</a
			>
		</div>
		<!-- Right side: floating images -->
		<div class="relative w-1/3">
			<img :src="require(`@/assets/images/jobs/image1.webp`)" class="absolute top-0 w-64 left-0" />
			<img :src="require(`@/assets/images/jobs/image2.webp`)" class="absolute top-16 w-64 left-16" />
			<img :src="require(`@/assets/images/jobs/image3.webp`)" class="absolute top-32 w-64 left-32" />
			<img :src="require(`@/assets/images/jobs/image4.webp`)" class="absolute top-48 w-64 left-24" />
		</div>
	</div>
</template>
