<script setup lang="ts">
import { onBeforeMount, ref, watch } from 'vue'

import SubpageHeader from '@/components/SubpageHeader.vue'
import JobListing from '@/components/JobListing.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnect from '@walletconnect/web3-provider'
import CoinbaseWalletSDK from '@coinbase/wallet-sdk'

interface IJob {
	title: string
	workRequired: string[]
	imageUrl: string
	description: string
	startDate: string
	timeCommitment: string
	budget: string
	links: object
	formUrl: string
	creationDate: Date
}

const jobs = ref<Array<IJob>>([])
const searchInput = ref<string>(``)
const filteredJobs = ref<Array<IJob>>([])
const isLoading = ref<boolean>(true)
const loggedIn = ref<boolean>(false)

const filterResults = () => {
	const keyword = searchInput.value
	if (keyword.length < 3) {
		return
	}
	filteredJobs.value = []
	filteredJobs.value = jobs.value.filter((job) => {
		return (
			job.title.toLowerCase().includes(keyword.toLowerCase()) ||
			job.workRequired.toString().toLowerCase().includes(keyword.toLowerCase())
		)
	})
}

const message = ref<string>(``)
const messageToken = ref<string>(``)

watch(message, async (msg) => {
	signMessage(msg)
})

function fetchMessage() {
	const xhr = new XMLHttpRequest()
	xhr.open('GET', 'https://api.rootroop.com/jobs.php')
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.onload = () => {
		const res = JSON.parse(xhr.responseText)
		message.value = res.message
		messageToken.value = res.token
	}
	xhr.send()
}

async function signMessage(msg) {
	const providerOptions = {
		walletlink: {
			package: CoinbaseWalletSDK, // Required
			options: {
				appName: 'Web 3 Modal Demo', // Required
				infuraId: `e33b2d2eaead40f19e92ed11b7f4653b`, // Required unless you provide a JSON RPC url; see `rpc` below
			},
		},
		walletconnect: {
			package: WalletConnect, // required
			options: {
				infuraId: `e33b2d2eaead40f19e92ed11b7f4653b`, // required
			},
		},
	}

	const web3Modal = new Web3Modal({
		network: 'mainnet', // optional
		cacheProvider: true, // optional
		providerOptions, // required
	})
	const instance = await web3Modal.connect()
	const provider = new ethers.providers.Web3Provider(instance)
	// const signer = provider.getSigner()
	// const provider = new ethers.providers.Web3Provider(window.ethereum)
	// await provider.send('eth_requestAccounts', [])
	const signer = provider.getSigner()
	signer.signMessage(msg).then((token) => {
		fetchPrivateJobs(token)
	})
}

function fetchPrivateJobs(token) {
	isLoading.value = true

	const params = { signableMessageToken: messageToken.value, signature: token }
	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://api.rootroop.com/jobs.php')
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.onload = () => {
		if (xhr.status !== 200) {
			alert(xhr.status + `: ` + xhr.responseText)
			isLoading.value = false
			return
		}
		const rawJobs = JSON.parse(xhr.responseText)
		// Convert strings to dates
		for (const j in rawJobs) {
			rawJobs.creationDate = new Date(rawJobs[j].creationDate)
		}
		jobs.value = rawJobs
		isLoading.value = false
		loggedIn.value = true
	}
	xhr.send(JSON.stringify(params))
}

onBeforeMount(() => {
	// Fetch public jobs
	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'https://api.rootroop.com/jobs.php')
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.onload = () => {
		const rawJobs = JSON.parse(xhr.responseText)
		// Convert strings to dates
		for (const j in rawJobs) {
			rawJobs.creationDate = new Date(rawJobs[j].creationDate)
		}
		jobs.value = rawJobs
		isLoading.value = false
	}
	xhr.send()
})
</script>
<template>
	<SubpageHeader :title="`Roo Troop Bounty Hub`" />
	<div class="w-full flex flex-col items-center lg:flex-row justify-around">
		<button
			v-if="!loggedIn"
			href="https://jobs.rootroop.com/"
			target="_blank"
			class="bg-rooRed text-lg text-white rounded-lg text-center hover:font-semibold uppercase px-4 py-2 lg:order-last w-36 mb-5 lg:mt-5"
			@click="fetchMessage"
		>
			Login
		</button>
		<div class="flex flex-col lg:flex-row items-center">
			<a
				href="https://docs.rootroop.com/phase-two-so-you-like-utility/web3-pay-guide"
				target="_blank"
				class="bg-rooRed text-lg text-white rounded-lg text-center hover:font-semibold uppercase px-4 py-2 w-36 my-5 lg:mr-5"
			>
				Pay guide</a
			>
			<a
				href="https://forms.gle/uL1hgbvu8nEUZHJdA"
				target="_blank"
				class="bg-rooRed text-lg text-white rounded-lg text-center hover:font-semibold uppercase px-4 py-2 w-48 my-5"
				>POST JOBS (FREE)</a
			>
		</div>
		<!-- Search input -->
		<div class="h-12 flex order-last lg:order-3 my-5">
			<input
				v-model="searchInput"
				type="text"
				class="px-4 py-2 border-2 border-black focus:border-rooRed focus:outline-none rounded-lg h-full pr-4 lg:w-64"
				placeholder="Search"
				@keyup="filterResults"
			/>
			<button
				class="bg-rooRed text-white uppercase capitalize rounded-lg text-white h-12 flex justify-center items-center w-12 border border-rooRed -ml-4"
				@click="filterResults"
			>
				<SearchIcon class="w-4 h-4" />
			</button>
		</div>
	</div>
	<!-- When jobs are loading -->
	<div v-show="isLoading" class="flex py-24 justify-center"><LoadingSpinner /></div>
	<div v-show="!isLoading" class="flex justify-center mb-10">
		<div
			v-if="searchInput.length === 0"
			class="mt-10 grid gap-6 col-gap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
		>
			<JobListing
				v-for="j in jobs"
				:key="j.title"
				:title="j.title"
				:imageUrl="j.imageUrl"
				:workRequired="j.workRequired"
				:description="j.description"
				:startDate="j.startDate"
				:timeCommitment="j.timeCommitment"
				:budget="j.budget"
				:links="j.links"
				:formUrl="j.formUrl"
			/>
		</div>
		<div
			v-else
			class="mt-10 grid gap-6 col-gap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
		>
			<JobListing
				v-for="j in filteredJobs"
				:key="j.title"
				:title="j.title"
				:imageUrl="j.imageUrl"
				:workRequired="j.workRequired"
				:description="j.description"
				:startDate="j.startDate"
				:timeCommitment="j.timeCommitment"
				:budget="j.budget"
				:links="j.links"
				:formUrl="j.formUrl"
			/>
		</div>
	</div>
</template>
