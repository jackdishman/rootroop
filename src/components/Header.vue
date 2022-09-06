<script setup lang="ts">
import HeaderDropdown from './HeaderDropdown.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import HamburgerIcon from '@/components/icons/HamburgerMenu.vue'
import router from '@/router/index'
import { ref } from 'vue'

const showDropdown = ref<boolean>(false)

function handleScroll() {
	document.getElementById(router.currentRoute.value.hash.substring(1))?.scrollIntoView()
}
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
				:label="`ROOS`"
				:list="[
					{ title: `BUY ROOS`, url: `https://opensea.io/collection/roo-troop` },
					{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
				]"
				:expandedText="false"
			/>
			<HeaderDropdown
				:label="`JOEYS`"
				:list="[
					{ title: `BUY JOEYS`, url: `https://opensea.io/collection/joeymob` },
					{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
				]"
				:expandedText="false"
			/>
			<HeaderDropdown
				:label="`STAKE`"
				:list="[
					{ title: `STAKING DASHBOARD`, url: `https://stake.rootroop.com/` },
					{ title: `STAKING WHITEPAPER`, url: `https://docs.rootroop.com/phase-three-more-perks/staking-v2` },
				]"
				:expandedText="true"
			/>
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
			>
				LINKS</router-link
			>
			<router-link
				to="/philanthropy"
				:class="router.currentRoute.value.fullPath === `/philanthropy` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>PHILANTHROPY</router-link
			>
			<router-link
				to="/partners"
				:class="router.currentRoute.value.fullPath === `/partners` ? `text-rooRed` : `text-white`"
				class="header-link p-4"
				>PARTNERS</router-link
			>
			<router-link to="/jobs" class="text-white header-link p-4">JOBS</router-link>
			<a href="https://shop.rootroop.com" target="_blank" class="text-white header-link p-4">SHOP</a>
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
			<div
				class="flex flex-col text-sm block lg:hidden absolute top-0 right-0 items-center mt-10 rounded-b-lg border-b border-rooRed border-l bg-black -mr-8"
				:class="showDropdown ? `block` : `hidden`"
			>
				<HeaderDropdown
					:label="`ROOS`"
					:list="[
						{ title: `BUY ROOS`, url: `https://opensea.io/collection/roo-troop` },
						{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
					]"
					:expandedText="false"
				/>
				<HeaderDropdown
					:label="`JOEYS`"
					:list="[
						{ title: `BUY JOEYS`, url: `https://opensea.io/collection/joeymob` },
						{ title: `STAKE ROOS`, url: `https://stake.rootroop.com/` },
					]"
					:expandedText="false"
				/>
				<!-- <router-link
					to="/team"
					:class="router.currentRoute.value.fullPath === `/team` ? `text-rooRed` : `text-white`"
					class="header-link p-4"
					>TEAM</router-link
				> -->
				<HeaderDropdown
					:label="`STAKE`"
					:list="[
						{ title: `DASHBOARD`, url: `https://stake.rootroop.com/` },
						{ title: `WHITEPAPER`, url: `https://docs.rootroop.com/phase-three-more-perks/staking-v2` },
					]"
					:expandedText="false"
				/>
				<button
					v-if="router.currentRoute.value.name === `Home`"
					class="text-white header-link p-4"
					@click="handleScroll"
				>
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
				>
					LINKS</router-link
				>
				<router-link
					to="/philanthropy"
					:class="router.currentRoute.value.fullPath === `/philanthropy` ? `text-rooRed` : `text-white`"
					class="header-link p-4"
					>PHILANTHROPY</router-link
				>
				<router-link
					to="/partners"
					:class="router.currentRoute.value.fullPath === `/partners` ? `text-rooRed` : `text-white`"
					class="header-link p-4"
					>PARTNERS</router-link
				>
				<router-link to="/jobs" class="text-white header-link p-4">JOBS</router-link>
				<a href="https://shop.rootroop.com" target="_blank" class="text-white header-link p-4">SHOP</a>
				<router-link
					to="/faq"
					:class="router.currentRoute.value.fullPath === `/faq` ? `text-rooRed` : `text-white`"
					class="header-link p-4"
					>FAQ</router-link
				>
			</div>
		</div>
	</div>
</template>
