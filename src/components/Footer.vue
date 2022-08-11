<script setup lang="ts">
import TextLogo from '@/components/TextLogo.vue'
import { ref } from 'vue'
import ChevronDown from './icons/ChevronDown.vue'
import DiscordLogo from './icons/Discord.vue'
import OpenSea from './icons/OpenSea.vue'
import Twitter from './icons/Twitter.vue'

const activeDropdown = ref<null | `jurisdiction` | `terms` | `investments` | `waiver` | `arbitration`>()
function setActiveDropdown(active: `jurisdiction` | `terms` | `investments` | `waiver` | `arbitration`) {
	if (activeDropdown.value === active) {
		activeDropdown.value = null
		return
	}
	activeDropdown.value = active
}
</script>
<template>
	<div class="bg-rooBlack pt-10 pl-20 flex justify-center xl:justify-start">
		<TextLogo :large="true" class="w-32 h-20" />
	</div>
	<div class="bg-rooBlack xl:flex md:flex-row justify-center pb-10 px-24">
		<!-- Roo logo & socials -->
		<div class="w-full xl:w-1/3 flex-shrink-0">
			<p class="text-xs text-white italic leading-6 text-center xl:text-left">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in nibh vehicula.
			</p>
			<!-- Socials -->
			<div class="text-white flex flex-row text-rooRed mt-5 xl:mb-0 mb-5 xl:justify-start justify-center">
				<DiscordLogo class="w-6 h-6" /> <OpenSea class="w-6 h-6" /> <Twitter class="w-6 h-6" />
			</div>
		</div>
		<!-- Middle: Disclaimers -->
		<div class="px-10 w-full xl:w-1/3">
			<button
				class="focus:outline-none uppercase font-bold italic flex w-full justify-between items-center"
				:class="activeDropdown === `terms` ? `text-rooRed` : `text-white`"
				@click="setActiveDropdown(`terms`)"
			>
				<span class="text-start"> Terms & conditions </span>
				<ChevronDown />
			</button>
			<div v-show="activeDropdown === `terms`" class="text-white text-xs leading-6">
				You Own Your NFT: By connecting your Ethereum wallet and minting a Roo Troop NFT with our smart contract, you
				gain full and complete ownership of your NFT. Limitations of Liability for Gas, Failed Transactions, and other
				Bugs. You agree to not hold Roo Troop accountable for any losses you may incur as a consequence of minting your
				Roo Troop NFT. These potential losses include any gas fees for failed transactions, and any excessive gas fees
				during the minting process.
			</div>
			<!-- NFTs Are Not Intended as Investments -->
			<button
				class="mt-5 text-white focus:outline-none uppercase font-bold italic flex w-full justify-between items-center"
				:class="activeDropdown === `investments` ? `text-rooRed` : `text-white`"
				@click="setActiveDropdown(`investments`)"
			>
				<span class="text-start"> NFTs Are Not Intended as Investments </span>
				<ChevronDown class="text-white" />
			</button>
			<div v-show="activeDropdown === `investments`" class="text-white text-xs leading-6">
				NFTs serve exclusively as Non-Fungible Tokens for you to collect. They are not intended for any investment
				purposes. We make absolutely no promise or guarantee that these NFTs will hold any particular value once minted
				on our website. You are responsible for any tax liability which may arise from minting or reselling your Roo
				Troop NFT(s).
			</div>
		</div>
		<!-- More disclaimers -->
		<div class="px-10 w-full xl:w-1/3">
			<!-- Class action waiver -->
			<button
				class="mt-5 xl:mt-0 focus:outline-none uppercase font-bold italic flex w-full justify-between items-center"
				:class="activeDropdown === `waiver` ? `text-rooRed` : `text-white`"
				@click="setActiveDropdown(`waiver`)"
			>
				<span class="text-start"> Class action waiver </span>
				<ChevronDown />
			</button>
			<div v-show="activeDropdown === `waiver`" class="text-white text-xs leading-6">
				You agree to waive any class action status, and any legal dispute around the Roo Troop project. You agree that
				you are over the age of 18, or the legal age within your jurisdiction.
			</div>
			<!-- Arbitration -->
			<button
				:class="activeDropdown === `arbitration` ? `text-rooRed` : `text-white`"
				class="mt-5 focus:outline-none uppercase font-bold italic flex w-full justify-between items-center"
				@click="setActiveDropdown(`arbitration`)"
			>
				<span class="text-start"> Arbitration </span>
				<ChevronDown class="text-white" />
			</button>
			<div v-show="activeDropdown === `arbitration`" class="text-white text-xs leading-6">
				In the event that a legal dispute arises from anything related to Roo Troop, you agree to bring the case to
				binding arbitration according to appropriate Federal guidelines.
			</div>
			<!-- jurisdiction and choice of Law -->
			<button
				:class="activeDropdown === `jurisdiction` ? `text-rooRed` : `text-white`"
				class="mt-5 focus:outline-none uppercase font-bold italic flex w-full justify-between items-center"
				@click="setActiveDropdown(`jurisdiction`)"
			>
				<span class="text-start"> jurisdiction and choice of Law </span>
				<ChevronDown class="text-white" />
			</button>
			<div v-show="activeDropdown === `jurisdiction`" class="text-white text-xs leading-6">
				In the event that a legal dispute arises from anything related to Roo Troop, you agree to bring the case to
				binding arbitration according to appropriate Federal guidelines.
			</div>
		</div>
	</div>
	<div class="border-t-2 border-rooRed bg-black py-5">
		<h6 class="text-white text-center font-normal text-xs">Roo Troop LLC 2021. All Rights Reserved.</h6>
	</div>
</template>