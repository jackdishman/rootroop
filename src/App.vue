<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import router from '@/router/index'
import { watch } from 'vue'
import { useHead } from '@unhead/vue'
import { Head } from '@unhead/vue/components'

useHead({
	// Can be static or computed
	title: () => `Roo Troop`,
	meta: [
		{
			name: `description`,
			content: `Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem`,
		},
		{
			property: 'og:locale:alternate',
			content: 'zh',
			key: 'zh',
		},
		{ property: `og:image`, content: `https://test.rootroop.com/img/embed.744adbbd.png` },
		{ property: `og:title`, content: `Roo Troop` },
		{
			property: `og:description`,
			content: `Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem`,
		},
		{ property: `og:image:width`, content: `3440` },
		{ property: `og:image:height`, content: `1222` },
	],
})

watch(router.currentRoute, () => {
	window.scrollTo(0, 0)
})
</script>

<template>
	<Head>
		<meta property="og:url" content="https://rootroop.com/" />
		<meta property="og:type" content="website" />
		<meta property="og:image" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta property="og:image:secure_url" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta
			property="og:image:alt"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:type" content="image/png" />
		<meta property="og:title" content="Roo Troop" />
		<meta
			property="og:description"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:width" content="3440" />
		<meta property="og:image:height" content="1222" />
	</Head>
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
