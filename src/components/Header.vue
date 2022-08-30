<script setup lang="ts">
import TextLogo from '@/components/TextLogo.vue'
import HeaderDropdown from './HeaderDropdown.vue'
import router from '@/router/index'

function handleScroll() {
	document.getElementById(router.currentRoute.value.hash.substring(1))?.scrollIntoView()
}
</script>

<template>
	<div class="w-full bg-black flex flex-row justify-between items-center px-6">
		<!-- Left side: Logo -->
		<router-link to="/"> <TextLogo :large="false" /> </router-link>
		<!-- Right side: links -->
		<div class="flex flex-row text-sm">
			<HeaderDropdown
				:label="`ROOS`"
				:list="[
					{ title: `BUY ROOS`, url: `https://opensea.io/collection/roo-troop` },
					{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
					{ title: `TRAITS`, url: `/home#traits` },
				]"
			/>
			<HeaderDropdown
				:label="`JOEYS`"
				:list="[
					{ title: `BUY JOEYS`, url: `https://opensea.io/collection/joeymob` },
					{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
					{ title: `TRAITS`, url: `/` },
				]"
			/>
			<router-link
				to="/team"
				:class="router.currentRoute.value.fullPath === `/team` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>TEAM</router-link
			>
			<a href="https://stake.rootroop.com" target="_blank" class="focus: outline-none text-white header-link p-4"
				>STAKE</a
			>
			<button v-if="router.currentRoute.value.name === `Home`" class="text-white header-link p-4" @click="handleScroll">
				ROADMAP
			</button>
			<router-link
				v-else
				:to="{
					path: '/home',
					hash: '#roadmap',
				}"
				class="text-white header-link p-4"
				>ROADMAP</router-link
			>
			<!-- <a href="#roadmap" class="text-white header-link p-4">ROADMAP</a> -->
			<router-link
				to="/links"
				:class="router.currentRoute.value.fullPath === `/links` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>OFFICIAL LINKS</router-link
			>
			<router-link
				to="/philanthropy"
				:class="router.currentRoute.value.fullPath === `/philanthropy` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>PHILANTHROPY</router-link
			>
			<router-link
				to="/faq"
				:class="router.currentRoute.value.fullPath === `/faq` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>FAQ</router-link
			>
			<router-link
				to="/partners"
				:class="router.currentRoute.value.fullPath === `/partners` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>PARTNERS</router-link
			>
			<router-link to="/" class="text-white header-link p-4">JOBS</router-link>
			<router-link to="/" class="text-white header-link p-4">SHOP</router-link>
		</div>
	</div>
</template>
