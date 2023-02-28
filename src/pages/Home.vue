<script setup lang="ts">
import { onMounted } from 'vue'
import InstagramLogo from '@/components/icons/Instagram.vue'
import TwitterLogo from '@/components/icons/Twitter.vue'
import DiscordLogo from '@/components/icons/Discord.vue'
import NewsBanner from '@/components/home/Banner.vue'
import RooCarousel from '@/components/home/RooCarousel.vue'
import RooTraits from '@/components/home/RooTraits.vue'
import Stats from '@/components/home/Stats.vue'
import Comparison from '@/components/home/Comparison.vue'
import Roadmap from '@/components/home/Roadmap.vue'
import JobMarketplace from '@/components/home/JobMarketplace.vue'
import Team from '@/components/home/Team.vue'
import Partners from '@/components/home/Partners.vue'
import router from '@/router/index'
import { Head } from '@vueuse/head'

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
		<img
			alt="Roo background image"
			:src="require(`@/assets/images/roo-bg.webp`)"
			class="absolute h-72 lg:h-96 w-full object-cover"
		/>
		<!-- Logo -->
		<div class="absolute h-fit w-full flex items-center justify-center mt-12 lg:mt-24">
			<img :src="require(`@/assets/images/rootroop.png`)" class="w-64 pt-12" />
		</div>
		<!-- Social links -->
		<div class="flex items-end absolute justify-center text-white relative h-72 lg:h-96 pb-10">
			<a href="https://twitter.com/RooTroopNFT" target="_blank" class="mx-2"><TwitterLogo /></a>
			<a href="https://discord.com/invite/rootroop" target="_blank" class="mr-2"><DiscordLogo /></a>
			<a href="https://instagram.com/rootroop" target="_blank"><InstagramLogo /></a>
		</div>
	</div>
	<NewsBanner />
	<!-- Mission and video -->
	<div class="flex flex-col lg:flex-row w-full items-center justify-around py-10 px-4">
		<h4
			class="italic w-full text-center lg:text-left lg:w-1/3 text-rooBlack font-semibold font-poppins text-xl leading-9"
		>
			The <span class="uppercase text-rooRed font-bold">MISSION</span> of Roo Troop is to
			<span class="uppercase text-rooRed font-bold">UNITE A COMMUNITY</span> that is eager to build in Web 3.0 and
			successfully roll out the first <span class="uppercase text-rooRed font-bold">ON-CHAIN JOB MARKETPLACE,</span>
			a platform that will disrupt the traditional job market.
		</h4>
		<div class="bg-rooRed w-full lg:w-1/3 mt-4 lg:mt-0">
			<iframe
				width="560"
				height="315"
				src="https://www.youtube-nocookie.com/embed/_CCJQqrMmjQ"
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
	<Stats />
	<!-- Partners -->
	<Partners />
	<!-- Team -->
	<Team />
</template>
