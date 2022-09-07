<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import SubpageHeader from '@/components/SubpageHeader.vue'
import JobListing from '@/components/JobListing.vue'
import SearchIcon from '@/components/icons/SearchIcon.vue'

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

const filterResults = () => {
	const keyword = searchInput.value
	console.log(keyword)
	filteredJobs.value = []
	filteredJobs.value = jobs.value.filter((job) => {
		return (
			job.title.toLowerCase().includes(keyword.toLowerCase()) ||
			// job.description.toLowerCase().includes(keyword.toLowerCase()) ||
			job.workRequired.toString().toLowerCase().includes(keyword.toLowerCase())
		)
	})
	console.log(keyword, filteredJobs.value)
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
		// console.log(jobs.value)
	}
	xhr.send()
})
</script>
<template>
	<SubpageHeader :title="`Roo Troop Bounty Hub`" />
	<div class="w-full flex flex-col items-center lg:flex-row justify-around">
		<a
			href="https://docs.rootroop.com/phase-two-so-you-like-utility/web3-pay-guide"
			target="_blank"
			class="text-rooRed text-lg italic underline text-center font-semibold uppercase pb-4"
			>View our Pay guide</a
		>
		<div class="h-12 flex">
			<input
				v-model="searchInput"
				type="text"
				class="px-4 py-2 border-2 border-black focus:border-rooRed focus:outline-none rounded-lg h-full pr-4"
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
	<div class="flex justify-center mb-10">
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
