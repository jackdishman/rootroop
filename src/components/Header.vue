<script setup lang="ts">
import TextLogo from '@/components/TextLogo.vue'
import HeaderDropdown from './HeaderDropdown.vue'
import router from '@/router/index'
console.log(router.currentRoute.value.fullPath)
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
					{ title: `TRAITS`, url: `/` },
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
			<router-link to="/" class="text-white header-link p-4">ROADMAP</router-link>
			<router-link
				to="/links"
				:class="router.currentRoute.value.fullPath === `/links` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>OFFICIAL LINKS</router-link
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
