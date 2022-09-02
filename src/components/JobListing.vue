<script setup lang="ts">
import { ref } from 'vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

defineProps({
	title: {
		type: String,
		default: `Default title`,
	},
	workRequired: {
		type: Array<string>,
		default: [],
	},
	imageUrl: {
		type: String,
		default: `http://mpmco.com/wp-content/uploads/2018/02/placeholder.jpg`,
	},
	workRequired: {
		type: Array<string>,
		default: [],
	},
	description: {
		type: String,
		default: `Default description`,
	},
	startDate: {
		type: String,
		default: ``,
	},
	timeCommitment: {
		type: String,
		default: ``,
	},
	budget: {
		type: String,
		default: ``,
	},
	links: {
		type: Object,
		default: new Object(),
	},
	formUrl: {
		type: String,
		default: ``,
	},
	creationDate: {
		type: Date,
		default: new Date(),
	},
})

const showDetails = ref<boolean>(false)
</script>

<template>
	<div class="w-48">
		<div class="">
			<img
				:src="imageUrl"
				:alt="title"
				onerror="this.onerror=null;this.src='http://mpmco.com/wp-content/uploads/2018/02/placeholder.jpg';"
				class="w-full h-48 rounded-lg mb-4"
			/>
		</div>
		<h6><span class="font-semibold pr-2">Role:</span>{{ workRequired.join(`, `).toString() }}</h6>
		<h6 class="my-2"><span class="font-semibold pr-2">Project:</span>{{ title }}</h6>
		<button class="text-rooRed font-semibold italic uppercase text-sm" @click="showDetails = true">
			Find out More >
		</button>
	</div>
	<!-- Info popup -->
	<Teleport v-if="showDetails" to="#popup">
		<div
			class="w-full h-screen fixed top-0 bottom-0 left-0 right-0 bg-white bg-opacity-25 z-20 flex justify-center items-center"
			@click.self="showDetails = false"
		>
			<!-- Inner card -->
			<div
				class="flex flex-col justify-center max-h-screen text-white bg-black p-10 w-full md:w-1/2 shadow-lg rounded-lg border-2 border-rooRed overflow-y-scroll"
			>
				<!-- Top: Close icon and title -->
				<div class="flex w-full justify-between pb-2">
					<div class="flex flex-row pb-4">
						<img
							:src="imageUrl"
							:alt="title"
							onerror="this.onerror=null;this.src='http://mpmco.com/wp-content/uploads/2018/02/placeholder.jpg';"
							class="h-24 w-24 rounded-lg"
						/>
						<div class="ml-4">
							<h2 class="text-black font-semibold text-xl">{{ title }}</h2>
							<h6 class="text-lg italic">{{ workRequired.join(`, `).toString() }}</h6>
						</div>
					</div>

					<CloseIcon
						class="cursor-pointer flex-shrink-0 text-rooRed rounded-full border border-rooRed bg-white"
						@click="showDetails = false"
					/>
				</div>
				<!-- details -->
				<div>
					<h6 class="pb-2"><span class="font-semibold pr-2">Start Date:</span>{{ startDate }}</h6>
					<h6 class="pb-2"><span class="font-semibold pr-2">Time commitment:</span>{{ timeCommitment }}</h6>
					<h6 class="pb-2"><span class="font-semibold pr-2">Budget:</span>{{ budget }}</h6>
					<h6 class="pb-2">
						<span class="font-semibold pr-2">Date created:</span>{{ creationDate.toLocaleDateString() }}
					</h6>
					<h6 class="pb-2"><span class="font-semibold pr-2">Description:</span>{{ description }}</h6>
					<div>
						<span class="font-semibold pr-2">Links:</span>
						<a v-for="(key, value) in links" :key="key" :href="key" target="blank" class="mr-2 underline text-rooRed">{{
							value
						}}</a>
					</div>

					<h6 class="mt-4 pb-2 text-center">
						<a :href="formUrl" class="font-semibold rounded-lg text-white bg-rooRed px-4 py-2">Apply</a>
					</h6>
				</div>
				<!-- Links at bottom -->
			</div>
		</div>
	</Teleport>
</template>
