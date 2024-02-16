<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
import TeamCard from '@/components/TeamCard.vue'

// import all team members
import Stone from '@/assets/images/team/stone.webp'
import Cory from '@/assets/images/team/cory.webp'
import Itsoktocry from '@/assets/images/team/itsoktocry.webp'
import Yunggod from '@/assets/images/team/yunggod.webp'
import Sam from '@/assets/images/team/sam.png'
import HiddenLotus from '@/assets/images/team/hiddenlotus.webp'
import Dish from '@/assets/images/team/dish.webp'
import Rev from '@/assets/images/team/rev.webp'
import Tobber from '@/assets/images/team/Tobber.webp'
</script>
<template>
	<div class="bg-rooBlack w-full py-10 flex justify-center">
		<!-- Inner container -->
		<div>
			<h2 class="text-center text-3xl text-white uppercase italic">Team</h2>
			<div class="flex justify-center mt-1"><RedUnderscore /></div>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-4 lg:gap-x-12 mt-12">
				<!-- Stone -->
				<TeamCard
					:imgSrc="Stone"
					:name="`Morgan Stone`"
					:screenName="`STØNE`"
					:title="`Founder & CEO`"
					:twitterURL="`https://twitter.com/MorganStoneee`"
				/>
				<!-- ToxicPizza -->
				<TeamCard
					:imgSrc="Cory"
					:name="`Cory Cherven`"
					:screenName="`ToxicPizza`"
					:title="`CTO`"
					:twitterURL="`https://twitter.com/Animalmix55`"
				/>
				<!-- ITSOKTOCRY -->
				<TeamCard
					:imgSrc="Itsoktocry"
					:name="`Gwen Stacy`"
					:screenName="`ITSOKTOCRY`"
					:title="`Artist`"
					:twitterURL="`https://twitter.com/itsokdontbesad`"
				/>
				<!-- YUNGGOD -->
				<TeamCard
					:imgSrc="Yunggod"
					:name="`William Bordeau`"
					:screenName="`YUNGGOD`"
					:title="`Discord Developer`"
					:twitterURL="`https://mobile.twitter.com/yunggodNFT`"
				/>
				<!-- Sam G -->
				<TeamCard
					:imgSrc="Sam"
					:name="`Sam G.`"
					:screenName="`SamGMan`"
					:title="`Project Manager & Support Lead`"
					:twitterURL="`https://twitter.com/smgstryker`"
				/>
				<!-- HiddenLotus -->
				<TeamCard
					:imgSrc="HiddenLotus"
					:name="`Lu`"
					:screenName="`HiddenLotus`"
					:title="`Web Developer`"
					:twitterURL="`https://twitter.com/hiddenlotustech`"
				/>
				<!-- Dish -->
				<TeamCard
					:imgSrc="Dish"
					:name="`Jack Dishman`"
					:screenName="`DISH`"
					:title="`Web Developer`"
					:twitterURL="`https://mobile.twitter.com/JackDishman`"
				/>
				<!-- Rev -->
				<TeamCard
					:imgSrc="Rev"
					:name="`Revant Singh`"
					:screenName="`Rev`"
					:title="`Software Consultant`"
					:twitterURL="`https://twitter.com/revantxsingh`"
				/>
				<!-- TOBBER -->
				<TeamCard
					:imgSrc="Tobber"
					:name="`TOBBER`"
					:screenName="`TOBBER`"
					:title="`Meme Prince`"
					:twitterURL="`https://mobile.twitter.com/Tobber_TV`"
				/>
			</div>
		</div>
	</div>
</template>
