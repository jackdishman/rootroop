<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import router from '@/router/index'
import { watch } from 'vue'
import { useHead } from '@vueuse/head'

useHead({
	// Can be static or computed
	title: () => `Roo Troop`,
	meta: [
		{
			name: `description`,
			content: () => `Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem`,
		},
	],
})

watch(router.currentRoute, () => {
	window.scrollTo(0, 0)
})
</script>

<template>
	<main class="m-0 overflow-x-hidden p-0 font-poppins">
		<Header v-if="router.currentRoute.value.fullPath !== `/`" class="z-20 fixed w-full" style="height: 50px" />
		<router-view class="w-full" style="padding-top: 50px" />
		<Footer v-if="router.currentRoute.value.fullPath !== `/`" />
		<!-- Audio player -->
		<AudioPlayer v-if="router.currentRoute.value.fullPath !== `/`" class="fixed bottom-0 z-10 w-full" />
		<div id="popup"></div>
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
