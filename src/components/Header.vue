<script setup lang="ts">
import HeaderDropdown from './HeaderDropdown.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import HamburgerIcon from '@/components/icons/HamburgerMenu.vue'
import router from '@/router/index'
import { ref } from 'vue'

const showDropdown = ref<boolean>(false)
</script>

<template>
	<div class="w-full bg-black flex flex-row justify-between items-center px-6">
		<!-- Left side: Logo -->
		<router-link to="/home">
			<div><img :src="require(`@/assets/images/overlay.png`)" style="height: 23px" /></div>
		</router-link>
		<!-- Desktop bar -->
		<div class="text-sm hidden lg:flex-row lg:flex">
			<HeaderDropdown
				:id="`0`"
				:label="`ROOS`"
				:list="[
					{ title: `BUY ROOS`, url: `https://opensea.io/collection/roo-troop` },
					{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
				]"
				:expandedText="false"
			/>
			<HeaderDropdown
				:id="`1`"
				:label="`JOEYS`"
				:list="[
					{ title: `BUY JOEYS`, url: `https://opensea.io/collection/joeymob` },
					{ title: `STAKE JOEYS`, url: `https://stake.rootroop.com/` },
				]"
				:expandedText="false"
			/>
			<HeaderDropdown
				:id="`2`"
				:label="`ROADMAP`"
				:list="[
					{ title: `ROADMAP`, url: `` },
					{ title: `WHITEPAPER`, url: `https://docs.rootroop.com/` },
				]"
				:expandedText="false"
			/>
			<HeaderDropdown
				:id="`3`"
				:label="`STAKE`"
				:list="[
					{ title: `STAKING DASHBOARD`, url: `https://stake.rootroop.com/` },
					{ title: `STAKING WHITEPAPER`, url: `https://docs.rootroop.com/phase-three-more-perks/staking-v2` },
				]"
				:expandedText="true"
			/>
			<router-link
				to="/jobs"
				:class="router.currentRoute.value.path === `/jobs` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>JOBS</router-link
			>
			<a href="https://shop.rootroop.com" target="_blank" class="text-white header-link p-4">SHOP</a>
			<router-link
				to="/partners"
				:class="router.currentRoute.value.fullPath === `/partners` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>PARTNERS</router-link
			>
			<router-link
				to="/philanthropy"
				:class="router.currentRoute.value.fullPath === `/philanthropy` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>PHILANTHROPY</router-link
			>
			<router-link
				to="/links"
				:class="router.currentRoute.value.fullPath === `/links` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
			>
				LINKS</router-link
			>
			<router-link
				to="/faq"
				:class="router.currentRoute.value.fullPath === `/faq` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>FAQ</router-link
			>
		</div>
		<!-- MOBILE SIDEBAR -->
		<div class="lg:hidden w-full relative">
			<div class="w-full flex justify-end">
				<button class="text-white bg-rooRed rounded-lg border-2 border-white p-2" @click="showDropdown = !showDropdown">
					<HamburgerIcon v-if="!showDropdown" class="w-5 h-5" /><CloseIcon v-else class="w-5 h-5" />
				</button>
			</div>
			<div :class="showDropdown ? `block` : `hidden`" class="flex flex-row">
				<div class="fixed top-0 bottom-0 left-0 right-0" @click.self="showDropdown = false"></div>
				<div
					class="flex flex-col text-sm block lg:hidden absolute top-0 right-0 items-center mt-10 rounded-b-lg border-b border-rooRed border-l bg-black -mr-8"
				>
					<HeaderDropdown
						:id="`4`"
						:label="`ROOS`"
						:list="[
							{ title: `BUY ROOS`, url: `https://opensea.io/collection/roo-troop` },
							{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
						]"
						:expandedText="false"
					/>
					<HeaderDropdown
						:id="`5`"
						:label="`JOEYS`"
						:list="[
							{ title: `BUY JOEYS`, url: `https://opensea.io/collection/joeymob` },
							{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
						]"
						:expandedText="false"
					/>
					<HeaderDropdown
						:id="`6`"
						:label="`ROADMAP`"
						:list="[
							{ title: `ROADMAP`, url: `` },
							{ title: `WHITEPAPER`, url: `https://docs.rootroop.com/` },
						]"
						:expandedText="false"
					/>
					<HeaderDropdown
						:id="`7`"
						:label="`STAKE`"
						:list="[
							{ title: `DASHBOARD`, url: `https://stake.rootroop.com/` },
							{ title: `WHITEPAPER`, url: `https://docs.rootroop.com/phase-three-more-perks/staking-v2` },
						]"
						:expandedText="false"
					/>
					<router-link
						to="/jobs"
						class="header-link p-4"
						:class="router.currentRoute.value.path === `/jobs` ? `text-rooRed` : `text-white`"
						>JOBS</router-link
					>
					<a href="https://shop.rootroop.com" target="_blank" class="text-white header-link p-4">SHOP</a>
					<router-link
						to="/partners"
						:class="router.currentRoute.value.fullPath === `/partners` ? `text-rooRed` : `text-white`"
						class="header-link p-4"
						>PARTNERS</router-link
					>
					<router-link
						to="/philanthropy"
						:class="router.currentRoute.value.fullPath === `/philanthropy` ? `text-rooRed` : `text-white`"
						class="header-link p-4"
						>PHILANTHROPY</router-link
					>
					<router-link
						to="/links"
						:class="router.currentRoute.value.fullPath === `/links` ? `text-rooRed` : `text-white`"
						class="header-link p-4"
					>
						LINKS</router-link
					>
					<router-link
						to="/faq"
						:class="router.currentRoute.value.fullPath === `/faq` ? `text-rooRed` : `text-white`"
						class="header-link p-4"
						>FAQ</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>
