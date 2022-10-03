<script setup lang="ts">
import { ref } from 'vue'
import RedUnderscore from '@/components/icons/RedUnderscore.vue'

const traits = ref<string[]>([`background`, `eyewear`, `eyes`, `body`, `headwear`, `clothing`, `snout`, `gear`, `tail`])
const activeTrait = ref<string>(`default`)

function activateTrait(trait: string) {
	activeTrait.value = trait
}
</script>

<template>
	<div class="flex flex-col sm:flex-row justify-center bg-rooBlack p-10 items-center">
		<!-- Mobile header -->
		<h2 class="uppercase text-white italic font-semibold text-3xl text-center sm:hidden mb-5">Every Roo is unique</h2>
		<!-- Left side: Image -->
		<div class="bg-rooRed p-1 sm:mr-4">
			<img :src="require(`@/assets/images/traits/${activeTrait}.png`)" class="w-64 h-64 bg-white" />
		</div>
		<!-- Right side: traits -->
		<div class="ml-6">
			<h2 class="uppercase text-white italic font-semibold text-3xl hidden sm:block">Every Roo is unique</h2>
			<!-- ____ traits -->
			<div class="flex flex-col-reverse sm:flex-row items-center sm:items-end my-4">
				<RedUnderscore class="mb-3 sm:mr-3" />
				<h3 class="text-white text-lg font-bold italic">Traits</h3>
			</div>
			<!-- Trait selector -->
			<div class="grid grid-cols-2 lg:grid-cols-3 gap-2">
				<div v-for="t in traits" :key="t" class="flex items-center">
					<button
						class="rounded-lg w-full px-6 py-2 font-semibold uppercase text-xs"
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
