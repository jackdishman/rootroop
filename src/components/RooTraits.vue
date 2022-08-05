<script setup lang="ts">
import { ref } from 'vue'

const traits = ref<string[]>([`background`, `eyewear`, `eyes`, `body`, `headwear`, `clothing`, `snout`, `gear`, `tail`])
const activeTrait = ref<string>(`default`)

function activateTrait(trait: string) {
	activeTrait.value = trait
}
</script>

<template>
	<div class="flex justify-center bg-rooBlack p-10">
		<!-- Left side: Image -->
		<div class="bg-rooRed p-1 mr-4">
			<img :src="require(`@/assets/images/traits/${activeTrait}.png`)" class="w-64 h-64 bg-white" />
		</div>
		<!-- Right side: traits -->
		<div class="ml-4">
			<h2 class="uppercase text-white italic font-semibold text-4xl">Every Roo is unique</h2>
			<!-- ____ traits -->
			<div class="flex items-end my-4">
				<svg width="37" height="4" viewBox="0 0 37 4" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M0 2H37" stroke="#DC3545" stroke-width="4" />
				</svg>
				<h3 class="text-white text-2xl font-bold italic">Traits</h3>
			</div>
			<!-- Trait selector -->
			<div class="grid grid-cols-3 gap-2">
				<div v-for="t in traits" :key="t" class="flex items-center">
					<button
						class="rounded-lg w-full px-6 py-2 font-semibold"
						:class="t === activeTrait ? `text-white border border-rooRed` : `inactiveButton`"
						@click="activateTrait(t)"
					>
						{{ t }}
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.inactiveButton {
	border: 1px solid rgba(255, 255, 255, 0.4);
	color: rgba(255, 255, 255, 0.4);
}
</style>
