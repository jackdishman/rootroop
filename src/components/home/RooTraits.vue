<script setup lang="ts">
import { ref } from 'vue'
import RedUnderscore from '@/components/icons/RedUnderscore.vue'

// import trait images
import defaultTrait from '@/assets/images/traits/default.png'
import background from '@/assets/images/traits/background.png'
import eyewear from '@/assets/images/traits/eyewear.png'
import eyes from '@/assets/images/traits/eyes.png'
import body from '@/assets/images/traits/body.png'
import headwear from '@/assets/images/traits/headwear.png'
import clothing from '@/assets/images/traits/clothing.png'
import snout from '@/assets/images/traits/snout.png'
import gear from '@/assets/images/traits/gear.png'
import tail from '@/assets/images/traits/tail.png'

const traits = ref<{ name: string; image: string }[]>([
	{
		name: `background`,
		image: background,
	},
	{
		name: `eyewear`,
		image: eyewear,
	},
	{
		name: `eyes`,
		image: eyes,
	},
	{
		name: `body`,
		image: body,
	},
	{
		name: `headwear`,
		image: headwear,
	},
	{
		name: `clothing`,
		image: clothing,
	},
	{
		name: `snout`,
		image: snout,
	},
	{
		name: `gear`,
		image: gear,
	},
	{
		name: `tail`,
		image: tail,
	},
])
const activeTrait = ref<string>(defaultTrait)

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
			<img :src="activeTrait" class="w-64 h-64 bg-white" />
		</div>
		<!-- Right side: traits -->
		<div class="sm:ml-6">
			<h2 class="uppercase text-white italic font-semibold text-3xl hidden sm:block">Every Roo is unique</h2>
			<!-- ____ traits -->
			<div class="flex flex-col-reverse sm:flex-row items-center sm:items-end my-4">
				<RedUnderscore class="mb-3 sm:mr-3" />
				<h3 class="text-white text-lg font-bold italic">Traits</h3>
			</div>
			<!-- Desktop Trait selector -->
			<div class="hidden sm:grid grid-cols-3 gap-2">
				<div v-for="t in traits" :key="t.name" class="flex items-center">
					<button
						class="rounded-lg w-full px-6 py-2 font-semibold uppercase text-xs"
						:class="t.image === activeTrait ? `text-white border border-rooRed` : `inactiveButton`"
						@click="activateTrait(t.image)"
					>
						{{ t.name }}
					</button>
				</div>
			</div>
			<!-- Mobile Trait selector -->
			<div class="flex flex-row flex-wrap justify-center sm:hidden gap-2 items-center">
				<div v-for="t in traits" :key="t.name" class="flex items-center">
					<button
						class="rounded-lg w-32 px-6 py-2 font-semibold uppercase text-xs"
						:class="t.image === activeTrait ? `text-white border border-rooRed` : `inactiveButton`"
						@click="activateTrait(t.image)"
					>
						{{ t.name }}
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
