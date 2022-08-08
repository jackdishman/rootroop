<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
</script>
<template>
	<div class="bg-rooBlack w-full py-10">
		<h2 class="text-center text-4xl text-white uppercase">Team</h2>
		<div class="flex justify-center mt-1"><RedUnderscore /></div>
		<div class="grid grid-cols-3 gap-4">
			<!-- Stone -->
			<div class="flex flex-col items-center">
				<img :src="require(`@/assets/images/team/stone.webp`)" class="w-32 h-32" />
				<h3 class="font-semibold text-white text-xl italic">STØNE</h3>
				<h6 class="font-bold text-white">Morgan Stone</h6>
				<h6 class="font-bold text-rooRed">Founder & CEO</h6>
			</div>
			<!-- ToxicPizza -->
			<div class="flex flex-col items-center">
				<img :src="require(`@/assets/images/team/cory.webp`)" class="w-32 h-32" />
				<h3 class="font-semibold text-white text-xl italic">ToxicPizza</h3>
				<h6 class="font-bold text-white">Cory Cherven</h6>
				<h6 class="font-bold text-rooRed">CTO</h6>
			</div>
			<!-- ITSOKTOCRY -->
			<div class="flex flex-col items-center">
				<img :src="require(`@/assets/images/team/itsoktocry.webp`)" class="w-32 h-32" />
				<h3 class="font-semibold text-white text-xl italic">ITSOKTOCRY</h3>
				<h6 class="font-bold text-white">Gwen Stacy</h6>
				<h6 class="font-bold text-rooRed">Artist</h6>
			</div>
		</div>
		<!-- HiddenLotus -->
		<div class="flex flex-col items-center">
			<img :src="require(`@/assets/images/team/hiddenlotus.webp`)" class="w-32 h-32" />
			<h3 class="font-semibold text-white text-xl italic">HiddenLotus</h3>
			<h6 class="font-bold text-white">Lu</h6>
			<h6 class="font-bold text-rooRed">Web Developer</h6>
		</div>
		<!-- YUNGGOD -->
		<div class="flex flex-col items-center">
			<img :src="require(`@/assets/images/team/hiddenlotus.webp`)" class="w-32 h-32" />
			<h3 class="font-semibold text-white text-xl italic">YUNGGOD</h3>
			<h6 class="font-bold text-white">William Bordeau</h6>
			<h6 class="font-bold text-rooRed">Discord Developer</h6>
		</div>
		<!-- TOBBER -->
		<div class="flex flex-col items-center">
			<img :src="require(`@/assets/images/team/hiddenlotus.webp`)" class="w-32 h-32" />
			<h3 class="font-semibold text-white text-xl italic">TOBBER</h3>
			<h6 class="font-bold text-white">TOBBER</h6>
			<h6 class="font-bold text-rooRed">Meme prince</h6>
		</div>
	</div>
</template>
