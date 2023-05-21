<script setup lang="ts">
import { ref } from 'vue'
import SubpageHeader from '@/components/SubpageHeader.vue'
import ChevronDown from '@/components/icons/ChevronDown.vue'
import { Head } from '@vueuse/head'

const activeDropdown = ref<number>(-1)
const toggleDropdown = (d: number) => {
	if (activeDropdown.value === d) {
		activeDropdown.value = -1
		return
	}
	activeDropdown.value = d
}
</script>
<template>
	<Head>
		<meta property="og:image" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta property="og:title" content="Roo Troop - FAQ" />
		<meta
			property="og:description"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:width" content="3440" />
		<meta property="og:image:height" content="1222" />
	</Head>
	<SubpageHeader :title="`FAQs`" />
	<div class="bg-white flex justify-center">
		<div class="w-full px-20 lg:w-2/3">
			<!-- Dropdown 0 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(0)"
			>
				How many Roo Troop NFTs are in the collection?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 0 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 0" class="font-normal mb-12">
				There are 5,500 Roos in the collection + three 1/1 Super Roos
			</p>

			<!-- Dropdown 1 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(1)"
			>
				HOW MANY JOEY MOB NFTS ARE IN THE COLLECTION?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 1 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 1" class="font-normal mb-12">
				There are 5,500 NFTs in the Joey Mob collection, a combination of both matured Joeys & Joeybean Incubators.
			</p>

			<!-- Dropdown 2 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(2)"
			>
				When did roo troop mint?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 2 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 2" class="font-normal mb-12">January 4th-6th, 2022</p>

			<!-- Dropdown 3 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(3)"
			>
				WHEN DID JOEY MOB MINT?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 3 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 3" class="font-normal mb-12">March 15th-16th, 2022</p>

			<!-- Dropdown 4 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(4)"
			>
				What phase of the roadmap is roo troop on?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 4 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 4" class="font-normal mb-12">
				Roo Troop currently has all roadmap intiatives underway + more being worked on behind the scenes.
			</p>

			<!-- Dropdown 5 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(5)"
			>
				What is a bounty?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 5 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 5" class="font-normal mb-12">Bounties are paid job opportunities to work in Web3.</p>

			<!-- Dropdown 6 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(6)"
			>
				Where do bounties come from?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 6 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 6" class="font-normal mb-12">
				There is heavy demand from project founders & business owners for talented community members to join their
				teams, Roo Troop is their bridge to the talent they're looking for.
			</p>

			<!-- Dropdown 7 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(7)"
			>
				How do i claim a bounty?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 7 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 7" class="font-normal mb-4">
				All new bounties are posted on the
				<a href="https://jobs.rootroop.com/" target="_blank" class="underline">Roo Troop Bounty Hub</a>. and are
				viewable to Roo Troop holders as well as all partner community holders for a one-week period of exclusivity
				before opening up to the public.
			</p>
			<p v-if="activeDropdown === 7" class="font-normal mb-4">
				Once you find a bounty that suits you, submit your information via the bounty application, where the employer
				can track applicants in real-time. If there is interest, they will reach out directly by way of the contact
				information you provide. If there isn't interest, they will likely not reach out.
			</p>
			<p v-if="activeDropdown === 7" class="font-normal mb-12">Roo Troop does not decide who gets the job(s).</p>

			<!-- Dropdown 8 -->
			<button
				class="text-rooRed font-semibold text-lg italic mb-5 uppercase flex items-center"
				@click="toggleDropdown(8)"
			>
				HOW DO I POST A BOUNTY?
				<span class="ml-2"><ChevronDown :style="activeDropdown === 8 ? `transform: rotate(180deg)` : ``" /></span>
			</button>
			<p v-if="activeDropdown === 8" class="font-normal mb-4">
				If you'd like to submit jobs that you want us to shop to the community,
				<a href="https://forms.gle/8e7BbHwPqj2GrLQs5" target="_blank" class="underline">click here</a>.
			</p>
			<p v-if="activeDropdown === 8" class="font-normal mb-4">
				Once we approve the job(s), our team will post a bounty to the community and add you as a collaborator on the
				form.
			</p>
			<p v-if="activeDropdown === 8" class="mb-12">
				You are required to let our team know if you hire an applicant so that we can keep the record on our end. If you
				skip this step, you will not be allowed to submit bounties in the future.
			</p>
		</div>
	</div>
</template>
