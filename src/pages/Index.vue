<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue'
import TextLogo from '@/components/TextLogo.vue'
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
})
</script>
<template>
	<!-- Splash video, socials, logo -->
	<div class="relative overflow-hidden" :style="`height: ` + videoHeight + `px`">
		<video ref="video" autoplay muted loop class="absolute w-full">
			<source src="https://rootroop.com/assets/video/rooWeb.mp4" type="video/mp4" />
		</video>
		<div class="flex items-center justify-center h-full relative z-10"><TextLogo :large="true" /></div>
		<!-- Social links -->
		<div class="flex items-center justify-center relative -mt-24">
			<a href=""><InstagramLogo /></a>
			<a href="" class="mx-2"><TwitterLogo /></a>
			<a href="" class="mr-2"><DiscordLogo /></a>
			<a href=""><OpenSeaLogo style="width: 24px; height: 24px" /></a>
		</div>
	</div>
	<NewsBanner />
	<!-- Mission and video -->
	<div class="flex flex-row w-full items-center justify-around py-10">
		<h4 class="italic w-1/3 text-rooBlack font-semibold font-poppins text-xl leading-9">
			The <span class="uppercase text-rooRed font-bold">mission</span> of Roo Troop is to
			<span class="uppercase text-rooRed font-bold">unite a community</span> that is eager to build in Web3/NFTs and
			provide them with the multiple facets of utility needed to
			<span class="uppercase text-rooRed font-bold">succeed</span>
		</h4>
		<div class="bg-rooRed w-1/3">
			<video controls class="w-full border-4 border-rooRed">
				<source src="https://rootroop.com/assets/video/rooWeb.mp4" type="video/mp4" />
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
	<Roadmap />
	<!-- Job marketplace intro -->
	<JobMarketplace />
	<!-- Team -->
	<Team />
	<!-- Partners -->
	<Partners />
</template>
