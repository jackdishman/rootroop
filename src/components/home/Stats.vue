<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'

const floorPrice = ref<number>(-1)
const ownersCount = ref<number>(-1)
const totalVolume = ref<number>(-1)
const count = ref<number>(-1)

onBeforeMount(() => {
	// Fetch public jobs
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://api.opensea.io/api/v1/collection/roo-troop/stats')
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.onload = () => {
		const { stats } = JSON.parse(xhr.responseText)
		floorPrice.value = stats.floor_price
		ownersCount.value = stats.num_owners
		totalVolume.value = stats.total_volume
		count.value = stats.count
		// Convert strings to dates
	}
	xhr.send()
})
</script>
<template>
	<div class="flex justify-center bg-rooBlack py-10 lg:px-10">
		<div class="w-480 sm:w-760">
			<h4 class="text-white font-bold text-center uppercase mb-5 text-sm">
				<span class="border-b-2 border-rooRed sm:border-b-0 px-4 pb-2">Our proud stats</span>
			</h4>
			<!-- <div class="grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:divide-x divide-rooRed"> -->
			<div class="flex flex-col sm:flex-row">
				<div class="sm:pr-8 mt-2 sm:border-r border-rooRed">
					<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ count }}</h2>
					<p class="text-white font-normal text-center uppercase text-xs">Items</p>
				</div>
				<div class="sm:px-8 mt-4 sm:border-r border-rooRed">
					<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ ownersCount }}</h2>
					<p class="text-white font-normal text-center uppercase text-xs">Owners</p>
				</div>
				<div class="sm:px-8 mt-4 sm:border-r border-rooRed">
					<div class="flex justify-center -ml-4">
						<img :src="require(`@/assets/images/logos/eth.png`)" />
						<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ Math.round(totalVolume) }}</h2>
					</div>
					<p class="text-white font-normal text-center uppercase text-xs">Total volume</p>
				</div>
				<div class="sm:pl-8 mt-4">
					<div class="flex justify-center -ml-4">
						<img :src="require(`@/assets/images/logos/eth.png`)" class="" />
						<h2 class="text-lg sm:text-2xl text-rooRed">{{ floorPrice }}</h2>
					</div>
					<p class="text-white font-normal text-center sm:text-right uppercase text-xs">Floor price</p>
				</div>
			</div>
		</div>
	</div>
</template>
