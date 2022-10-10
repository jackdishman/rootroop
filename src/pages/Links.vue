<script setup lang="ts">
import { linksMap } from '@/links'
import SubpageHeader from '@/components/SubpageHeader.vue'
import { ref } from 'vue'
import { Head } from '@vueuse/head'

const roos = ref<string[]>([
	require(`@/assets/images/slider/2358.webp`),
	require(`@/assets/images/slider/2495.webp`),
	require(`@/assets/images/slider/3227.webp`),
	require(`@/assets/images/slider/3235.webp`),
	require(`@/assets/images/slider/3549.webp`),
	require(`@/assets/images/slider/4031.webp`),
	require(`@/assets/images/slider/4300.webp`),
	require(`@/assets/images/slider/1423.webp`),
])

const joeys = ref<string[]>([
	require(`@/assets/images/joeys/10.webp`),
	require(`@/assets/images/joeys/7.webp`),
	require(`@/assets/images/joeys/6.webp`),
	require(`@/assets/images/joeys/5.webp`),
	require(`@/assets/images/joeys/4.webp`),
	require(`@/assets/images/joeys/3.webp`),
	require(`@/assets/images/joeys/2.webp`),
	require(`@/assets/images/joeys/1.webp`),
])
</script>
<template>
	<Head>
		<meta property="og:image" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta property="og:title" content="Roo Troop - Links" />
		<meta
			property="og:description"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:width" content="3440" />
		<meta property="og:image:height" content="1222" />
	</Head>
	<SubpageHeader :title="`Official Links`" />
	<div class="w-full sm:px-10 text-center flex flex-row justify-between">
		<!-- Roos on left -->
		<div class="bg-rooRed p-4 rounded-lg mb-10">
			<img v-for="r in roos" :key="r" :src="r" alt="roo image" class="w-12 h-12 sm:w-24 sm:h-24 my-4 sm:my-2" />
		</div>
		<div class="sm:pt-6 mb-10">
			<a
				v-for="l in linksMap"
				:key="l[0]"
				:href="l[1]"
				target="_blank"
				class="truncate font-bold text-center text-lg underline mb-6"
			>
				<h6 class="pb-2 sm:pb-6">{{ l[0] }}</h6>
			</a>
		</div>
		<!-- Joeys on right -->
		<div class="bg-rooRed p-4 rounded-lg mb-10">
			<img v-for="r in joeys" :key="r" :src="r" alt="joey image" class="w-12 h-12 sm:w-24 sm:h-24 my-4 sm:my-2" />
		</div>
	</div>
</template>
