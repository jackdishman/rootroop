<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import EthereumIcon from '../icons/EthereumIcon.vue'

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
		<div class="w-full">
			<h4 class="text-white font-bold text-center uppercase mb-5 text-sm">Our proud stats</h4>
			<div class="flex flex-row justify-center">
				<div class="pr-4 border-r border-rooRed">
					<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ count }}</h2>
					<p class="text-white font-normal text-center uppercase text-xs">Items</p>
				</div>
				<div class="px-4 border-r border-rooRed">
					<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ ownersCount }}</h2>
					<p class="text-white font-normal text-center uppercase text-xs">Owners</p>
				</div>
				<div class="px-4 border-r border-rooRed">
					<div class="flex items-center justify-center">
						<EthereumIcon class="w-4 h-4" />
						<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ Math.round(totalVolume) }}</h2>
					</div>
					<p class="text-white font-normal text-center uppercase text-xs">Total volume</p>
				</div>
				<div class="pl-4">
					<div class="flex items-center justify-center">
						<EthereumIcon class="w-4 h-4" />
						<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ floorPrice.toFixed(2) }}</h2>
					</div>
					<p class="text-white font-normal text-center uppercase text-xs">Floor price</p>
				</div>
			</div>
		</div>
	</div>
</template>
