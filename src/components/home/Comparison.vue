<script setup lang="ts">
import { ref } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = ref<string[]>([
	require(`@/assets/images/slider/1.webp`),
	require(`@/assets/images/slider/666.webp`),
	require(`@/assets/images/slider/103.webp`),
	require(`@/assets/images/slider/185.webp`),
	require(`@/assets/images/slider/225.webp`),
	require(`@/assets/images/slider/266.webp`),
	require(`@/assets/images/slider/365.webp`),
	require(`@/assets/images/slider/420.webp`),
	require(`@/assets/images/slider/537.webp`),
	require(`@/assets/images/slider/634.webp`),
	require(`@/assets/images/slider/637.webp`),
	require(`@/assets/images/slider/783.webp`),
	require(`@/assets/images/slider/886.webp`),
	require(`@/assets/images/slider/927.webp`),
	require(`@/assets/images/slider/1183.webp`),
	require(`@/assets/images/slider/1423.webp`),
	require(`@/assets/images/slider/1454.webp`),
	require(`@/assets/images/slider/1605.webp`),
	require(`@/assets/images/slider/1622.webp`),
	require(`@/assets/images/slider/1818.webp`),
	require(`@/assets/images/slider/2358.webp`),
	require(`@/assets/images/slider/2495.webp`),
	require(`@/assets/images/slider/3227.webp`),
	require(`@/assets/images/slider/3235.webp`),
	require(`@/assets/images/slider/3549.webp`),
	require(`@/assets/images/slider/4031.webp`),
	require(`@/assets/images/slider/4300.webp`),
])
const joeyImages = ref<string[]>([
	require(`@/assets/images/joeys/18.webp`),
	require(`@/assets/images/joeys/22.webp`),
	require(`@/assets/images/joeys/21.webp`),
	require(`@/assets/images/joeys/20.webp`),
	require(`@/assets/images/joeys/19.webp`),
	require(`@/assets/images/joeys/17.webp`),
	require(`@/assets/images/joeys/16.webp`),
	require(`@/assets/images/joeys/15.webp`),
	require(`@/assets/images/joeys/14.webp`),
	require(`@/assets/images/joeys/13.webp`),
	require(`@/assets/images/joeys/12.webp`),
	require(`@/assets/images/joeys/11.webp`),
	require(`@/assets/images/joeys/10.webp`),
	require(`@/assets/images/joeys/9.webp`),
	require(`@/assets/images/joeys/8.webp`),
	require(`@/assets/images/joeys/7.webp`),
	require(`@/assets/images/joeys/6.webp`),
	require(`@/assets/images/joeys/5.webp`),
	require(`@/assets/images/joeys/4.webp`),
	require(`@/assets/images/joeys/3.webp`),
	require(`@/assets/images/joeys/2.webp`),
	require(`@/assets/images/joeys/1.webp`),
])
const incubatorImages = ref<string[]>([
	require(`@/assets/images/incubators/unnamed.png`),
	require(`@/assets/images/incubators/unnamed_1.png`),
	require(`@/assets/images/incubators/unnamed_2.png`),
	require(`@/assets/images/incubators/unnamed_3.png`),
	require(`@/assets/images/incubators/unnamed_4.png`),
	require(`@/assets/images/incubators/unnamed_5.png`),
	require(`@/assets/images/incubators/unnamed_6.png`),
	require(`@/assets/images/incubators/unnamed_7.png`),
	require(`@/assets/images/incubators/unnamed_8.png`),
	require(`@/assets/images/incubators/unnamed_9.png`),
	require(`@/assets/images/incubators/unnamed_10.png`),
	require(`@/assets/images/incubators/unnamed_11.png`),
	require(`@/assets/images/incubators/unnamed_12.png`),
	require(`@/assets/images/incubators/unnamed_13.png`),
	require(`@/assets/images/incubators/unnamed_14.png`),
	require(`@/assets/images/incubators/unnamed_15.png`),
	require(`@/assets/images/incubators/unnamed_16.png`),
	require(`@/assets/images/incubators/unnamed_17.png`),
	require(`@/assets/images/incubators/unnamed_18.png`),
	require(`@/assets/images/incubators/unnamed_19.png`),
	require(`@/assets/images/incubators/unnamed_20.png`),
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
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Roo</h5>
			<!-- <div class="flex justify-center">
				<p class="w-48 text-white text-xs text-normal leading-5">
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
					Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
				</p>
			</div> -->
			<div class="flex justify-center">
				<ul class="text-rooRed py-5 px-10 list-disc list-outside text-sm">
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
					<li>Larger token airdrop upon the marketplace's full public launch</li>
					<li>Free features within the on-chain job marketplace that will be monetized for others</li>
				</ul>
			</div>
			<div class="flex justify-center mb-10 absolute bottom-0 w-full">
				<div>
					<a
						href="https://opensea.io/collection/roo-troop?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[toggles][0]=BUY_NOW
"
						target="_blank"
						class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Buy Roos
					</a>
					<a
						href="https://stake.rootroop.com/"
						target="_blank"
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Stake Roos
					</a>
				</div>
			</div>
		</div>
		<!-- Joeys -->
		<div class="bg-rooBlack w-full lg:w-1/3 border-x-8 relative">
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
			<h5 class="text-white text-center font-semibold text-xl mb-5 italic">Joey</h5>
			<div class="flex justify-center">
				<ul class="text-rooRed py-5 px-10 py-5 list-disc list-outside text-sm">
					<li>Companion NFT in the Roo Troop ecosystem</li>
					<li>Second-tier access</li>
					<li>Access to Mod Mob</li>
					<li><a href="#">Access to the $ROOLAH Shop</a></li>
					<li>Discounts on select brand deals</li>
					<li>Rarity-based staking at 1/2 the rate as Roos</li>
					<li>Ability to compete in Roo Troop sponsored events</li>
					<li>Token airdrop upon the marketplace's full public launch</li>
					<li>Access to Kanga-Kademy & any education-based partnerships</li>
					<li>Access to all alpha channels & tools, including any alpha-centric partnerships</li>
					<li>Added perks within the on-chain job marketplace when holding both Roos + Joeys</li>
				</ul>
			</div>
			<div class="flex justify-center mb-10 absolute bottom-0 w-full">
				<div>
					<a
						href="https://opensea.io/collection/joeymob?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[toggles][0]=BUY_NOW"
						target="_blank"
						class="w-full block uppercase bg-rooRed text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Buy joeys
					</a>
					<a
						href="https://stake.rootroop.com/"
						target="_blank"
						class="w-full block mt-5 uppercase border border-rooRed bg-rooBlack text-white px-6 py-2 text-sm text-center"
						style="border-radius: 7px"
					>
						Stake joeys
					</a>
				</div>
			</div>
		</div>
		<!-- Incubators -->
		<div class="bg-rooBlack w-full lg:w-1/3 relative">
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
			<div class="flex justify-center">
				<p class="py-5 px-10 text-white text-xs text-normal leading-5 py-5">
					The Joeybean Incubators need to be incubated (hyperlink incubation page) for 12 weeks in order to turn into
					fully matured Joeys. Incubators come with almost all of the same utility as Joeys, except they cannot be
					staked & there may be some perks upon the marketplace's full public launch for those holding Incubators
					instead of Joeys.
				</p>
			</div>
			<div class="flex justify-center mb-10 absolute bottom-0 w-full">
				<div>
					<a
						href="https://opensea.io/collection/joeymob?search[sortAscending]=true&search[sortBy]=UNIT_PRICE&search[stringTraits][0][name]=Incubator&search[stringTraits][0][values][0]=Ash&search[stringTraits][0][values][1]=Sand&search[stringTraits][0][values][2]=Mocha&search[stringTraits][0][values][3]=Coal&search[stringTraits][0][values][4]=Coffee&search[stringTraits][0][values][5]=Purp&search[stringTraits][0][values][6]=Tomato&search[stringTraits][0][values][7]=Bubblegum&search[stringTraits][0][values][8]=Banana%20Split&search[stringTraits][0][values][9]=Berry&search[stringTraits][0][values][10]=Weed&search[stringTraits][0][values][11]=Trippy&search[stringTraits][0][values][12]=Irradiated&search[stringTraits][0][values][13]=Demon&search[stringTraits][0][values][14]=Arctic&search[stringTraits][0][values][15]=Golden&search[stringTraits][0][values][16]=Glitch&search[stringTraits][0][values][17]=Alien&search[stringTraits][0][values][18]=Angel&search[stringTraits][0][values][19]=Robo&search[stringTraits][0][values][20]=Lava&search[toggles][0]=BUY_NOW"
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
						Stake Incubators
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
