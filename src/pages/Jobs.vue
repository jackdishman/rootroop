<script setup lang="ts">
import { onBeforeMount, ref } from 'vue'
import SubpageHeader from '@/components/SubpageHeader.vue'
import JobListing from '@/components/JobListing.vue'

const jobs = ref()

onBeforeMount(() => {
	// Fetch public jobs
	const xhr = new XMLHttpRequest()
	xhr.open('POST', 'http://api.rootroop.com/jobs.php')
	xhr.setRequestHeader('Accept', 'application/json')
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.onload = () => {
		const rawJobs = JSON.parse(xhr.responseText)
		// Convert strings to dates
		for (const j in rawJobs) {
			// console.log(rawJobs[j])
			rawJobs.creationDate = new Date(rawJobs[j].creationDate)
		}
		jobs.value = rawJobs
	}
	xhr.send()
})
</script>
<template>
	<SubpageHeader :title="`Jobs`" />
	<div class="flex justify-center">
		<div class="mt-10 grid gap-6 col-gap grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
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
	</div>
</template>
