<script setup lang="ts">
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
import TeamCard from '@/components/TeamCard.vue'
</script>
<template>
	<div class="bg-rooBlack w-full py-10 flex justify-center">
		<!-- Inner container -->
		<div>
			<h2 class="text-center text-3xl text-white uppercase italic">Team</h2>
			<div class="flex justify-center mt-1"><RedUnderscore /></div>
			<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 place-items-center gap-y-10 gap-x-4 lg:gap-x-12 mt-12">
				<!-- Stone -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/stone.webp`)"
					:name="`Morgan Stone`"
					:screenName="`STØNE`"
					:title="`Founder & CEO`"
					:twitterURL="`https://twitter.com/MorganStoneee`"
				/>
				<!-- ToxicPizza -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/cory.webp`)"
					:name="`Cory Cherven`"
					:screenName="`ToxicPizza`"
					:title="`CTO`"
					:twitterURL="`https://twitter.com/Animalmix55`"
				/>
				<!-- ITSOKTOCRY -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/itsoktocry.webp`)"
					:name="`Gwen Stacy`"
					:screenName="`ITSOKTOCRY`"
					:title="`Artist`"
					:twitterURL="`https://twitter.com/itsokdontbesad`"
				/>
				<!-- YUNGGOD -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/yunggod.webp`)"
					:name="`William Bordeau`"
					:screenName="`YUNGGOD`"
					:title="`Discord Developer`"
					:twitterURL="`https://mobile.twitter.com/yunggodNFT`"
				/>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-4 lg:gap-x-12 mt-12">
				<!-- HiddenLotus -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/hiddenlotus.webp`)"
					:name="`Lu`"
					:screenName="`HiddenLotus`"
					:title="`Web Developer`"
					:twitterURL="`https://twitter.com/hiddenlotustech`"
				/>
				<!-- Dish -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/dish.webp`)"
					:name="`Jack Dishman`"
					:screenName="`DISH`"
					:title="`Web Developer`"
					:twitterURL="`https://mobile.twitter.com/JackDishman`"
				/>
				<!-- Rev -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/rev.webp`)"
					:name="`Revant Singh`"
					:screenName="`Rev`"
					:title="`Software Consultant`"
					:twitterURL="`https://twitter.com/revantxsingh`"
				/>
				<!-- TOBBER -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/tobber.webp`)"
					:name="`TOBBER`"
					:screenName="`TOBBER`"
					:title="`Meme Prince`"
					:twitterURL="`https://mobile.twitter.com/Tobber_TV`"
				/>
				<!-- Sam G -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/sam.png`)"
					:name="`Sam G.`"
					:screenName="`SamGMan`"
					:title="`Project Manager & Support Lead`"
					:twitterURL="`https://twitter.com/smgstryker`"
				/>
				<!-- Dfc2west (Don Clewley | Bounty Hub Manager | https://twitter.com/Dfc2west ) ->  -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/dfc.webp`)"
					:name="`Don Clewley`"
					:screenName="`Dfc2west`"
					:title="`Bounty Hub Manager`"
					:twitterURL="`https://twitter.com/Dfc2west`"
				/>
				<!-- Metacon (Kevin Schellman | Social Media Manager | https://twitter.com/metacon68 | attached pfp below)  -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/metacon.webp`)"
					:name="`Kevin Shellman`"
					:screenName="`Metacon`"
					:title="`Social Media Manager`"
					:twitterURL="`https://twitter.com/metacon68`"
				/>
				<!-- El Chingon (Gio Hernandez-Parra [will get you pfp + socials] listed as Holder Relations) ->  -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/chingon.jpeg`)"
					:name="`Gio Hernandez-Parra`"
					:screenName="`El Chingon`"
					:title="`Holder Relations`"
					:twitterURL="`https://twitter.com/gio3272`"
				/>
				<!-- NairoFee (Michael Mwangi [will get you pfp + socials] listed as Troop Analyst) ->  -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/nairo.jpeg`)"
					:name="`Michael Mwangi`"
					:screenName="`NairoFee`"
					:title="`Troop Analyst`"
					:twitterURL="`https://twitter.com/NairoFee`"
				/>
			</div>
		</div>
	</div>
</template>
