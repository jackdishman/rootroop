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
		<div class="w-full">
			<h4 class="text-white font-bold text-center uppercase mb-5 text-sm">Our proud stats</h4>
			<div class="grid grid-cols-4 divide-x divide-rooRed">
				<div>
					<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ count }}</h2>
					<p class="text-white font-normal text-center uppercase text-xs">Items</p>
				</div>
				<div>
					<h2 class="text-lg sm:text-2xl text-rooRed text-center">{{ ownersCount }}</h2>
					<p class="text-white font-normal text-center uppercase text-xs">Owners</p>
				</div>
				<div>
					<div class="flex justify-center">
						<img :src="require(`@/assets/images/logos/eth.png`)" class="-mr-4 lg:-mr-2" />
						<h2 class="text-lg sm:text-2xl text-rooRed text-center pr-12">{{ Math.round(totalVolume) }}</h2>
					</div>
					<p class="text-white font-normal text-center uppercase text-xs">Total volume</p>
				</div>
				<div>
					<div class="flex justify-center">
						<img :src="require(`@/assets/images/logos/eth.png`)" class="-mr-4 lg:-mr-2" />
						<h2 class="text-lg sm:text-2xl text-rooRed text-center pr-12">{{ floorPrice }}</h2>
					</div>
					<p class="text-white font-normal text-center uppercase text-xs">Floor price</p>
				</div>
			</div>
		</div>
	</div>
</template>
