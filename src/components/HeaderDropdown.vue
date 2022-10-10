<!-- eslint-disable @typescript-eslint/ban-ts-comment -->
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChevronDown from './icons/ChevronDown.vue'
import router from '@/router/index'

const props = defineProps<{
	label: string
	list: { title: string; url?: string }[]
	expandedText: boolean
	id: string
}>()

const showDropdown = ref<boolean>(false)

const handleRoadmap = () => {
	if (router.currentRoute.value.name === `Home`) {
		const container = document.getElementById(`roadmap`)
		container?.scrollIntoView()
		return
	}
	router.push({
		path: '/home',
		hash: '#roadmap',
	})
}

onMounted(() => {
	document.addEventListener(`click`, (e: Event) => {
		// Dropdown not open
		if (!showDropdown.value || !e) {
			return
		}
		// If clicking another component
		// @ts-ignore
		if (!e.target?.classList.contains(props.id)) {
			showDropdown.value = false
		}
	})
})

const handleDropdown = () => {
	showDropdown.value = !showDropdown.value
}

const tokenAddress = '0xbB6eeb74377d7eE402AdAEcb88D7Cf9494AA2814'
const tokenSymbol = '$ROOLAH'
const tokenDecimals = 18
const tokenImage = `https://test.rootroop.com/img/roolah.648d0af3.png`

async function addToken() {
	try {
		// wasAdded is a boolean. Like any RPC method, an error may be thrown.
		const wasAdded = await window.ethereum.request({
			method: 'wallet_watchAsset',
			params: {
				type: 'ERC20', // Initially only supports ERC20, but eventually more!
				options: {
					address: tokenAddress, // The address that the token is at.
					symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
					decimals: tokenDecimals, // The number of decimals in the token
					image: tokenImage, // A string url of the token logo
				},
			},
		})

		if (wasAdded) {
			console.log('Thanks for your interest!')
		} else {
			console.log('Your loss!')
		}
	} catch (error) {
		console.log(error)
	}
}
</script>

<template>
	<div class="relative">
		<button
			:class="id"
			class="flex text-white text-center flex justify-center font-semibold header-link px-4 focus:outline-none my-4 w-full"
			@click="handleDropdown"
		>
			{{ label }}<ChevronDown :class="id" class="ml-2" :style="showDropdown ? `transform: rotate(180deg)` : ``" />
		</button>
		<div
			v-show="showDropdown"
			class="z-10 lg:absolute flex flex-col bg-black text-white opacity-90 rounded-b pt-2"
			:class="expandedText ? `w-44` : `w-full`"
			style="margin-top: 1px"
		>
			<div v-for="li in list" :key="li.title" class="w-full text-center italic pb-2 text-sm">
				<button v-if="li.title === `ROADMAP`" @click="handleRoadmap">{{ li.title }}</button>
				<button v-else-if="li.url === `roolah`" @click="addToken()">{{ li.title }}</button>
				<a v-else :href="li.url" target="_blank">{{ li.title }}</a>
			</div>
		</div>
	</div>
</template>
