<script setup lang="ts">
import { onMounted } from 'vue'
import InstagramLogo from '@/components/icons/Instagram.vue'
import TwitterLogo from '@/components/icons/Twitter.vue'
import DiscordLogo from '@/components/icons/Discord.vue'
import NewsBanner from '@/components/home/Banner.vue'
import RooCarousel from '@/components/home/RooCarousel.vue'
import RooTraits from '@/components/home/RooTraits.vue'
// import Stats from '@/components/home/Stats.vue'
import Comparison from '@/components/home/Comparison.vue'
import Roadmap from '@/components/home/Roadmap.vue'
import JobMarketplace from '@/components/home/JobMarketplace.vue'
import Team from '@/components/home/Team.vue'
import router from '@/router/index'
import { Head } from '@unhead/vue/components'

// images
import bg from '@/assets/images/bg.png'
import logo from '@/assets/images/logo.png'
import roo1 from '@/assets/images/roo1.png'
import roo2 from '@/assets/images/roo2.png'

onMounted(() => {
	document.getElementById(router.currentRoute.value.hash.substring(1))?.scrollIntoView()
})
</script>
<template>
	<Head>
		<meta property="og:image" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta property="og:title" content="Roo Troop - Home" />
		<meta
			property="og:description"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:width" content="3440" />
		<meta property="og:image:height" content="1222" />
	</Head>
	<!-- Splash video, socials, logo -->
	<div class="relative overflow-hidden pt-10 w-full">
		<img alt="Roo background image" :src="bg" class="absolute h-72 lg:h-96 w-full object-cover" />
		<!-- Logo -->
		<div class="absolute h-fit w-full flex items-center justify-center">
			<img :src="logo" class="object-contain h-64 sm:h-48 lg:h-72" />
		</div>
		<!-- Social links -->
		<div class="flex items-end justify-center sm:justify-between text-white relative h-72 lg:h-96 pb-10">
			<img :src="roo1" class="w-48 hidden sm:block -mb-16" style="transform: scaleX(-1) rotate(-4deg)" />
			<div>
				<div class="mb-4 sm:mb-8">
					<a
						href="https://buy.rootroop.com/collections/0x4768cbf202f365fbf704b9b9d397551a0443909b/networks/polygon"
						target="_blank"
						class="uppercase text-white text-sm font-semibold rounded-lg bg-gray-600 border border-white px-4 py-2 mr-5"
					>
						Buy Roos
					</a>
					<a
						href="https://buy.rootroop.com/collections/0xb6fd6ba3fc87816e1a5450a02f69577dfa46a475/networks/polygon"
						target="_blank"
						class="uppercase text-white text-sm font-semibold rounded-lg bg-gray-600 border border-white px-4 py-2"
					>
						Buy joeys
					</a>
				</div>
				<div class="flex justify-center">
					<a href="https://twitter.com/RooTroopNFT" target="_blank"><TwitterLogo /></a>
					<a href="https://discord.com/invite/rootroop" target="_blank" class="mx-2"><DiscordLogo /></a>
					<a href="https://instagram.com/rootroop" target="_blank"><InstagramLogo /></a>
				</div>
			</div>
			<img :src="roo2" class="w-48 hidden sm:block -mb-16" style="transform: rotate(-4deg)" />
		</div>
	</div>
	<NewsBanner class="-mt-1" />
	<!-- Mission and video -->
	<div class="flex flex-col lg:flex-row w-full items-center justify-around py-10 px-4">
		<div
			class="italic w-full text-center lg:w-1/3 lg:text-left text-rooBlack font-semibold font-poppins text-xl leading-9"
		>
			The <span class="uppercase text-rooRed font-bold">MISSION</span> of Roo Troop is to
			<span class="uppercase text-rooRed font-bold">UNITE A COMMUNITY</span> that is eager to build in Web 3.0 and
			successfully roll out the first <span class="uppercase text-rooRed font-bold">ON-CHAIN JOB MARKETPLACE,</span>
			a platform that will disrupt the traditional job market.
			<div class="mb-5 text-2xl uppercase pt-5">
				<a href="https://seekr.io/" target="_blank" class="underline text-rooRed italic font-semibold"
					>Sign Up for Seekr</a
				>
			</div>
		</div>
		<div class="bg-rooRed w-full lg:w-1/3 mt-4 lg:mt-0">
			<iframe
				width="560"
				height="315"
				src="https://youtube.com/embed/N9ebMbz1S2s"
				title="YouTube video player"
				frameborder="0"
				class="w-full border-4 border-rooRed"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
	<!-- roadmap -->
	<div id="roadmap" style="padding-top: 24px" class="bg-rooBlack">
		<Roadmap />
	</div>
	<!-- Roos vs Joeys comparison -->
	<Comparison />
	<!-- Job marketplace intro -->
	<JobMarketplace />
	<!-- Roo carousel -->
	<RooCarousel />
	<!-- Every roo is unique -->
	<RooTraits />
	<!-- Our proud stats -->
	<!-- <Stats /> -->
	<!-- Team -->
	<Team />
</template>
