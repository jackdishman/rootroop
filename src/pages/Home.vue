<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import InstagramLogo from '@/components/icons/Instagram.vue'
import TwitterLogo from '@/components/icons/Twitter.vue'
import DiscordLogo from '@/components/icons/Discord.vue'
import OpenSeaLogo from '@/components/icons/OpenSea.vue'
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

const video = ref<HTMLVideoElement>()
const videoHeight = ref<number>(video.value ? video.value?.clientHeight : 0)

function resizeScreen() {
	videoHeight.value = video.value ? video.value?.clientHeight : 0
}

onMounted(() => {
	window.addEventListener(`resize`, (e) => {
		resizeScreen()
	})
	nextTick().then(() => {
		resizeScreen()
	})
	document.getElementById(router.currentRoute.value.hash.substring(1))?.scrollIntoView()
})
</script>
<template>
	<!-- Splash video, socials, logo -->
	<div class="relative overflow-hidden pt-10" :style="`height: ` + videoHeight + `px`">
		<video ref="video" autoplay muted loop class="absolute w-full">
			<source src="https://rootroop.com/assets/video/rooWeb.mp4" type="video/mp4" />
		</video>
		<!-- <div class="flex items-center justify-center h-full relative z-10"><TextLogo :large="true" /></div> -->
		<!-- Social links -->
		<div class="flex items-end absolute justify-center text-white relative h-full pb-10">
			<a href="https://opensea.io/collection/roo-troop" target="_blank"
				><OpenSeaLogo style="width: 24px; height: 24px"
			/></a>
			<a href="https://twitter.com/RooTroopNFT" target="_blank" class="mx-2"><TwitterLogo /></a>
			<a href="https://discord.com/invite/rootroop" target="_blank" class="mr-2"><DiscordLogo /></a>
		</div>
		<a href="https://instagram.com/rootroop" target="_blank"><InstagramLogo /></a>
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
		<div class="bg-rooRed w-full lg:w-1/3">
			<video controls class="w-full border-4 border-rooRed">
				<source :src="require(`/src/assets/video/rooWeb.mp4`)" type="video/mp4" />
			</video>
		</div>
	</div>
	<!-- Roo carousel -->
	<RooCarousel />
	<!-- Every roo is unique -->
	<RooTraits />
	<!-- Our proud stats -->
	<Stats />
	<!-- Roos vs Joeys comparison -->
	<Comparison />
	<!-- roadmap -->
	<div id="roadmap" style="padding-top: 24px">
		<Roadmap />
	</div>
	<!-- Job marketplace intro -->
	<JobMarketplace />
	<!-- Team -->
	<Team />
	<!-- Partners -->
	<Partners />
</template>
