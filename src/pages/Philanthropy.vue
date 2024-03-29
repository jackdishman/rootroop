<script setup lang="ts">
import { Head } from '@unhead/vue/components'
import SubpageHeader from '@/components/SubpageHeader.vue'

// import images
import roo1 from '@/assets/images/philanthropy/roo1.png'
import roo2 from '@/assets/images/philanthropy/roo2.png'
import roo3 from '@/assets/images/philanthropy/roo3.png'
import roo4 from '@/assets/images/philanthropy/roo4.png'
</script>

<template>
	<Head>
		<meta property="og:image" content="https://test.rootroop.com/img/embed.744adbbd.png" />
		<meta property="og:title" content="Roo Troop - Philanthropy" />
		<meta
			property="og:description"
			content="Bringing Awareness to Tree Kangaroos & Developing Innovative Technology for the Web3 Ecosystem"
		/>
		<meta property="og:image:width" content="3440" />
		<meta property="og:image:height" content="1222" />
	</Head>
	<SubpageHeader :title="`Philanthropy`" />
	<!-- Donation #1 -->
	<div class="flex justify-center">
		<div class="w-full px-10 lg:px-32">
			<h3 class="text-3xl font-semibold italic uppercase text-center">Rainforest Rescue</h3>
			<p class="pt-10 font-medium">
				We have ambitious goals to provide value to every Roo Troop holder, and we also have these same feelings about
				making a positive impact on Tree Kangaroos and their ecosystems.
			</p>

			<p class="pt-10 font-medium">Tree Kangaroos are a nearly extinct species, with around 2500 left in the wild.</p>
			<p class="pt-10 font-medium">
				When the idea to start an NFT project came up amongst our team, we knew that we wanted to have some sort of
				philanthropic aspect baked in. This is why we chose the Tree Kangaroo, a wildly unknown & endangered animal, to
				be at the helm of our work.
			</p>

			<p class="pt-10 font-medium">
				Their natural habitat in the Daintree Rainforest of Queensland has been negatively impacted by human-led
				deforestation meanwhile the average person doesn't even know Tree Roos exist. Being endangered is one thing, but
				to couple that with being almost entirely unheard of makes the survival of these creatures all the more
				difficult. With the conservation efforts of
				<a href="https://www.rainforestrescue.org.au/" target="_blank" class="underline text-rooRed font-semibold"
					>Rainforest Rescue</a
				>, the Daintree is slowly being restored & the animals that call it home are being protected.
			</p>

			<p class="py-10 font-medium">
				In March of 2022,
				<a
					href="https://twitter.com/RooTroopNFT/status/1501427983122194435?s=20&t=xKsZfrI0u93XYuxahDeT0Q"
					target="_blank"
					class="underline text-rooRed font-semibold"
				>
					Roo Labs donated 10eth ($30k) to Rainforest Rescue</a
				>. These funds were used to purchase Lot 19 in the Daintree Rainforest to preserve the habitat. For the first
				time, there is now an unbroken corridor from the lowest point of elevation all the way up to the highest for
				Tree Kangaroos to safely travel through, find mates & for Joeys to expand their territory.
			</p>
			<!-- Video -->
			<iframe
				width="100%"
				height="450"
				src="https://www.youtube.com/embed/hqe01nfEUZ4"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>

	<!-- Donation #2 -->
	<div class="flex justify-center mt-12">
		<div class="w-full px-10 lg:px-32">
			<h3 class="text-3xl font-semibold italic uppercase text-center">Ballarat Wildlife Park & Kombai</h3>
			<p class="pt-10 font-medium">
				In December of 2022,
				<a
					href="https://twitter.com/RooTroopNFT/status/1600609052152958976?s=20&t=krFtZ79j9DWTElVJnY3bLg"
					target="_blank"
					class="underline text-rooRed font-semibold"
				>
					Roo Labs donated another 1.795eth ($3,100) to Ballarat Wildlife Park.
				</a>
			</p>

			<p class="pt-10 font-medium">
				This donation came directly from the Roo Troop community's support, as we allocated 50% of each Super Roo sale
				towards this initiative.
			</p>

			<p class="pt-10 font-medium">
				The money from this donation will be used for enrichment items & enclosure updates for Kombai.
			</p>

			<p class="py-10 font-medium">
				Learn more about how YOU can play a part in Tree Roo conservation below from Kombai's handler, Cass.
			</p>
			<!-- Video -->
			<iframe
				width="100%"
				height="450"
				src="https://www.youtube.com/embed/e2RF8totMP0"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>

			<p class="py-10 font-medium">Rooty Roo!</p>
			<!-- bottom roos -->
			<div class="flex flex-row justify-center max-w-full">
				<img :src="roo3" class="w-24 h-24 lg:w-48 lg:h-48" />
				<img :src="roo4" class="w-24 h-24 lg:w-48 lg:h-48" />
				<img :src="roo1" class="w-24 h-24 lg:w-48 lg:h-48" />
				<img :src="roo2" class="w-24 h-24 lg:w-48 lg:h-48" />
			</div>
		</div>
	</div>
</template>
