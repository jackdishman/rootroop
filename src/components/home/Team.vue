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
			<div class="flex flex-col sm:flex-row items-center justify-around mt-12">
				<!-- Stone -->
				<TeamCard
					class="lg:ml-20 xl:ml-12"
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
					class="lg:mr-20 xl:mr-12"
					:imgSrc="require(`@/assets/images/team/itsoktocry.webp`)"
					:name="`Gwen Stacy`"
					:screenName="`ITSOKTOCRY`"
					:title="`Artist`"
					:twitterURL="`https://twitter.com/itsokdontbesad`"
				/>
			</div>
			<div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-10 gap-x-12 mt-12">
				<!-- YUNGGOD -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/yunggod.webp`)"
					:name="`William Bordeau`"
					:screenName="`YUNGGOD`"
					:title="`Discord Developer`"
					:twitterURL="`https://twitter.com/hiddenlotustech`"
				/>
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
				<!-- WK (Will Koester | Community Manager | https://twitter.com/WK_17_ ) -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/wk.webp`)"
					:name="`Will Koester`"
					:screenName="`WK`"
					:title="`Community Manager`"
					:twitterURL="`https://twitter.com/WK_17_`"
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
					:name="`Kevin Schellman`"
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
					:twitterURL="`https://twitter.com/metacon68`"
				/>
				<!-- NairoFee (Michael Mwangi [will get you pfp + socials] listed as Troop Analyst) ->  -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/nairo.jpeg`)"
					:name="`Michael Mwangi`"
					:screenName="`NairoFee`"
					:title="`Troop Analyst`"
					:twitterURL="`https://twitter.com/metacon68`"
				/>
				<!-- Sam G -->
				<TeamCard
					:imgSrc="require(`@/assets/images/team/sam.png`)"
					:name="`Sam G`"
					:screenName="`SamGMan`"
					:title="`Project Manager & Support Lead`"
					:twitterURL="`https://twitter.com/smgstryker`"
				/>
			</div>
		</div>
	</div>
</template>
