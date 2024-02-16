<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

// import all the roo images
import img1 from '@/assets/images/slider/1.webp'
import img666 from '@/assets/images/slider/666.webp'
import img103 from '@/assets/images/slider/103.webp'
import img185 from '@/assets/images/slider/185.webp'
import img225 from '@/assets/images/slider/225.webp'
import img266 from '@/assets/images/slider/266.webp'
import img365 from '@/assets/images/slider/365.webp'
import img420 from '@/assets/images/slider/420.webp'
import img537 from '@/assets/images/slider/537.webp'
import img634 from '@/assets/images/slider/634.webp'
import img637 from '@/assets/images/slider/637.webp'
import img783 from '@/assets/images/slider/783.webp'
import img886 from '@/assets/images/slider/886.webp'
import img927 from '@/assets/images/slider/927.webp'
import img1183 from '@/assets/images/slider/1183.webp'
import img1423 from '@/assets/images/slider/1423.webp'
import img1454 from '@/assets/images/slider/1454.webp'
import img1605 from '@/assets/images/slider/1605.webp'
import img1622 from '@/assets/images/slider/1622.webp'
import img1818 from '@/assets/images/slider/1818.webp'
import img2358 from '@/assets/images/slider/2358.webp'
import img2495 from '@/assets/images/slider/2495.webp'
import img3227 from '@/assets/images/slider/3227.webp'
import img3235 from '@/assets/images/slider/3235.webp'
import img3549 from '@/assets/images/slider/3549.webp'
import img4031 from '@/assets/images/slider/4031.webp'
import img4300 from '@/assets/images/slider/4300.webp'

// import all the joey images (add joey_ to import prefix)
import joey_1 from '@/assets/images/joeys/18.webp'
import joey_2 from '@/assets/images/joeys/22.webp'
import joey_3 from '@/assets/images/joeys/21.webp'
import joey_4 from '@/assets/images/joeys/20.webp'
import joey_5 from '@/assets/images/joeys/19.webp'
import joey_6 from '@/assets/images/joeys/17.webp'
import joey_7 from '@/assets/images/joeys/16.webp'
import joey_8 from '@/assets/images/joeys/15.webp'
import joey_9 from '@/assets/images/joeys/14.webp'
import joey_10 from '@/assets/images/joeys/13.webp'
import joey_11 from '@/assets/images/joeys/12.webp'
import joey_12 from '@/assets/images/joeys/11.webp'
import joey_13 from '@/assets/images/joeys/10.webp'
import joey_14 from '@/assets/images/joeys/9.webp'
import joey_15 from '@/assets/images/joeys/8.webp'
import joey_16 from '@/assets/images/joeys/7.webp'
import joey_17 from '@/assets/images/joeys/6.webp'
import joey_18 from '@/assets/images/joeys/5.webp'
import joey_19 from '@/assets/images/joeys/4.webp'
import joey_20 from '@/assets/images/joeys/3.webp'
import joey_21 from '@/assets/images/joeys/2.webp'
import joey_22 from '@/assets/images/joeys/1.webp'

// import all the incubator images
import incubator_1 from '@/assets/images/incubators/unnamed.png'
import incubator_2 from '@/assets/images/incubators/unnamed_1.png'
import incubator_3 from '@/assets/images/incubators/unnamed_2.png'
import incubator_4 from '@/assets/images/incubators/unnamed_3.png'
import incubator_5 from '@/assets/images/incubators/unnamed_4.png'
import incubator_6 from '@/assets/images/incubators/unnamed_5.png'
import incubator_7 from '@/assets/images/incubators/unnamed_6.png'
import incubator_8 from '@/assets/images/incubators/unnamed_7.png'
import incubator_9 from '@/assets/images/incubators/unnamed_8.png'
import incubator_10 from '@/assets/images/incubators/unnamed_9.png'
import incubator_11 from '@/assets/images/incubators/unnamed_10.png'
import incubator_12 from '@/assets/images/incubators/unnamed_11.png'
import incubator_13 from '@/assets/images/incubators/unnamed_12.png'
import incubator_14 from '@/assets/images/incubators/unnamed_13.png'
import incubator_15 from '@/assets/images/incubators/unnamed_14.png'
import incubator_16 from '@/assets/images/incubators/unnamed_15.png'
import incubator_17 from '@/assets/images/incubators/unnamed_16.png'
import incubator_18 from '@/assets/images/incubators/unnamed_17.png'
import incubator_19 from '@/assets/images/incubators/unnamed_18.png'
import incubator_20 from '@/assets/images/incubators/unnamed_19.png'

// array of roo images
const images = ref<string[]>([
	img1,
	img666,
	img103,
	img185,
	img225,
	img266,
	img365,
	img420,
	img537,
	img634,
	img637,
	img783,
	img886,
	img927,
	img1183,
	img1423,
	img1454,
	img1605,
	img1622,
	img1818,
	img2358,
	img2495,
	img3227,
	img3235,
	img3549,
	img4031,
	img4300,
])

const joeyImages = ref<string[]>([
	joey_1,
	joey_2,
	joey_3,
	joey_4,
	joey_5,
	joey_6,
	joey_7,
	joey_8,
	joey_9,
	joey_10,
	joey_11,
	joey_12,
	joey_13,
	joey_14,
	joey_15,
	joey_16,
	joey_17,
	joey_18,
	joey_19,
	joey_20,
	joey_21,
	joey_22,
])

const incubatorImages = ref<string[]>([
	incubator_1,
	incubator_2,
	incubator_3,
	incubator_4,
	incubator_5,
	incubator_6,
	incubator_7,
	incubator_8,
	incubator_9,
	incubator_10,
	incubator_11,
	incubator_12,
	incubator_13,
	incubator_14,
	incubator_15,
	incubator_16,
	incubator_17,
	incubator_18,
	incubator_19,
	incubator_20,
])
</script>

<template>
	<h2 class="font-semibold text-3xl uppercase text-center text-rooBlack px-10 py-10 italic">What's the difference?</h2>
	<div class="flex flex-col lg:flex-row justify-center">
		<!-- Roos -->
		<div class="bg-rooBlack w-full lg:w-1/3 relative pb-32">
			<div class="flex justify-center mx-10 mt-10 mb-5">
				<span class="w-48 h-48 bg-rooRed">
					<Carousel :items-to-show="1">
						<Slide v-for="img in images" :key="img">
							<img :src="img" class="p-1 carousel__item" />
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</span>
			</div>
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Roos</h5>
			<!-- <div class="flex justify-center">
					<p class="w-48 text-white text-xs text-normal leading-5">
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
						Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					</p>
				</div> -->
			<div class="flex justify-center pb-10 lg:pb-0">
				<ul class="text-white py-5 px-10 list-disc list-outside text-sm">
					<li>Genesis NFT in the Roo Troop ecosystem</li>
					<li>First-tier access</li>
					<li>Giveaways</li>
					<li>Access to Mod Mob</li>
					<li>Rarity-based staking</li>
					<li>Whitelist opportunities</li>
					<li>Access to Kanga-Kademy</li>
					<li>Discounts on all brand deals</li>
					<li><a href="#">Access to the $ROOLAH Shop</a></li>
					<li><a href="#">Discounts on Roo Tech solutions</a></li>
					<li>Access to all alpha channels & tools</li>
					<li>Access to all utility from partnerships</li>
					<li>Ability to list services on the $ROOLAH Shop</li>
					<li>Free or discounted entry to Roo Troop IRL events</li>
					<li>Ability to compete in Roo Troop sponsored events</li>
					<li>Exclusive visibility to job listings one week before the public</li>
					<li>Free features within the on-chain job marketplace that will be monetized for others</li>
				</ul>
			</div>
			<div class="flex justify-center mb-10 absolute bottom-0 w-full">
				<div>
					<a
						href="https://buy.rootroop.com/marketplace/roo-troop?traits=zzBuy+Now%3AYes"
						target="_blank"
						class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Buy Roos
					</a>
					<!-- <a
						href="https://stake.rootroop.com/"
						target="_blank"
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Stake Roos
					</a> -->
				</div>
			</div>
		</div>
		<!-- Joeys -->
		<div class="bg-rooBlack w-full lg:w-1/3 lg:border-x-8 relative pb-32">
			<div class="flex justify-center mx-10 mt-10 mb-5">
				<span class="w-48 h-48 bg-rooRed">
					<Carousel :items-to-show="1">
						<Slide v-for="img in joeyImages" :key="img">
							<img :src="img" class="p-1 carousel__item" />
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</span>
			</div>
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Joeys</h5>
			<div class="flex justify-center pb-10 lg:pb-0">
				<ul class="text-white px-10 py-5 list-disc list-outside text-sm">
					<li>Companion NFT in the Roo Troop ecosystem</li>
					<li>Second-tier access</li>
					<li>Access to Mod Mob</li>
					<li><a href="#">Access to the $ROOLAH Shop</a></li>
					<li>Discounts on select brand deals</li>
					<li>Rarity-based staking at 1/2 the rate as Roos</li>
					<li>Ability to compete in Roo Troop sponsored events</li>
					<li>Access to Kanga-Kademy & any education-based partnerships</li>
					<li>Access to all alpha channels & tools, including any alpha-centric partnerships</li>
					<li>Added perks within the on-chain job marketplace when holding both Roos + Joeys</li>
				</ul>
			</div>
			<div class="flex justify-center mb-10 absolute bottom-0 w-full">
				<div>
					<a
						href="https://buy.rootroop.com/marketplace/joeymob?traits=zzBuy+Now%3AYes"
						target="_blank"
						class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Buy joeys
					</a>
					<!-- <a
						href="https://stake.rootroop.com/"
						target="_blank"
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Stake joeys
					</a> -->
				</div>
			</div>
		</div>
		<!-- Incubators -->
		<div class="bg-rooBlack w-full lg:w-1/3 relative pb-32">
			<div class="flex justify-center mx-10 mt-10 mb-5">
				<span class="w-48 h-48 bg-rooRed">
					<Carousel :items-to-show="1">
						<Slide v-for="img in incubatorImages" :key="img">
							<img :src="img" class="p-1 carousel__item" />
						</Slide>
						<template #addons>
							<Navigation />
						</template>
					</Carousel>
				</span>
			</div>
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Incubators</h5>
			<div class="flex justify-center pb-10 lg:pb-0">
				<p class="py-5 px-10 text-white text-sm text-normal leading-5">
					The Joeybean Incubators need to be
					<a href="https://joey.rootroop.com" target="_blank" class="underline">incubated</a> for 12 weeks in order to
					turn into fully matured Joeys. Incubators come with almost all of the same utility as Joeys, except they
					cannot be staked & there may be some perks upon the marketplace's full public launch for those holding
					Incubators instead of Joeys.
				</p>
			</div>
			<div class="flex justify-center mb-10 absolute bottom-0 w-full">
				<div>
					<a
						href="https://buy.rootroop.com/#/marketplace/roo-troop?traits=zzBuy+Now%3AYes
"
						target="_blank"
						class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Buy Incubators
					</a>
					<a
						href="https://joey.rootroop.com/"
						target="_blank"
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Incubate Joeys
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<style scoped>
.carousel__prev,
.carousel__next {
	box-sizing: content-box;
	border: 5px solid white;
	background-color: transparent;
}
.carousel__icon {
	width: 32px;
}
</style>
