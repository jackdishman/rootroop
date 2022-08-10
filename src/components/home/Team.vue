<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
import TwitterIcon from '@/components/icons/Twitter.vue'
</script>
<template>
	<div class="bg-rooBlack w-full py-10 flex justify-center">
		<!-- Inner container -->
		<div>
			<h2 class="text-center text-3xl text-white uppercase italic">Team</h2>
			<div class="flex justify-center mt-1"><RedUnderscore /></div>
			<div class="grid grid-cols-3 gap-y-10 gap-x-12 mt-12">
				<!-- Stone -->
				<div class="flex flex-col items-center">
					<div class="bg-rooRed p-1">
						<img :src="require(`@/assets/images/team/stone.webp`)" class="w-28 h-28" />
					</div>
					<h3 class="font-medium text-white text-lg italic">STØNE</h3>
					<h6 class="font-semibold text-sm italic text-white">Morgan Stone</h6>
					<h6 class="font-semibold text-sm italic text-rooRed">Founder & CEO</h6>
					<a href="" class="pt-2 text-white">
						<TwitterIcon />
					</a>
				</div>
				<!-- ToxicPizza -->
				<div class="flex flex-col items-center">
					<div class="bg-rooRed p-1">
						<img :src="require(`@/assets/images/team/cory.webp`)" class="w-28 h-28" />
					</div>
					<h3 class="font-medium text-white text-lg italic">ToxicPizza</h3>
					<h6 class="font-semibold text-sm italic text-white">Cory Cherven</h6>
					<h6 class="font-semibold text-sm italic text-rooRed">CTO</h6>
					<a href="" class="pt-2 text-white">
						<TwitterIcon />
					</a>
				</div>
				<!-- ITSOKTOCRY -->
				<div class="flex flex-col items-center">
					<div class="bg-rooRed p-1">
						<img :src="require(`@/assets/images/team/itsoktocry.webp`)" class="w-28 h-28" />
					</div>
					<h3 class="font-medium text-white text-lg italic">ITSOKTOCRY</h3>
					<h6 class="font-semibold text-sm italic text-white">Gwen Stacy</h6>
					<h6 class="font-semibold text-sm italic text-rooRed">Artist</h6>
					<a href="" class="pt-2 text-white">
						<TwitterIcon />
					</a>
				</div>
				<!-- HiddenLotus -->
				<div class="flex flex-col items-center">
					<div class="bg-rooRed p-1">
						<img :src="require(`@/assets/images/team/hiddenlotus.webp`)" class="w-28 h-28" />
					</div>
					<h3 class="font-medium text-white text-lg italic">HiddenLotus</h3>
					<h6 class="font-semibold text-sm italic text-white">Lu</h6>
					<h6 class="font-semibold text-sm italic text-rooRed">Web Developer</h6>
					<a href="" class="pt-2 text-white">
						<TwitterIcon />
					</a>
				</div>
				<!-- YUNGGOD -->
				<div class="flex flex-col items-center">
					<div class="bg-rooRed p-1">
						<img :src="require(`@/assets/images/team/yunggod.webp`)" class="w-28 h-28" />
					</div>
					<h3 class="font-medium text-white text-lg italic">YUNGGOD</h3>
					<h6 class="font-semibold text-sm italic text-white">William Bordeau</h6>
					<h6 class="font-semibold text-sm italic text-rooRed">Discord Developer</h6>
					<a href="" class="pt-2 text-white">
						<TwitterIcon />
					</a>
				</div>
				<!-- TOBBER -->
				<div class="flex flex-col items-center">
					<div class="bg-rooRed p-1">
						<img :src="require(`@/assets/images/team/tobber.webp`)" class="w-28 h-28" />
					</div>
					<h3 class="font-medium text-white text-lg italic">TOBBER</h3>
					<h6 class="font-semibold text-sm italic text-white">TOBBER</h6>
					<h6 class="font-semibold text-sm italic text-rooRed">Meme prince</h6>
					<a href="" class="pt-2 text-white">
						<TwitterIcon />
					</a>
				</div>
			</div>
		</div>
	</div>
</template>
