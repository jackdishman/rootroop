<script lang="ts">
import TextLogo from '@/components/TextLogo.vue'
import HeaderDropdown from './HeaderDropdown.vue'
export default {
	name: 'TopHeader',
	components: {
		TextLogo,
		HeaderDropdown,
	},
	data() {
		return {
			toggleRoosDropdown: false,
		}
	},
	methods: {},
}
</script>

<template>
	<div class="w-full bg-black flex flex-row justify-between items-center px-6">
		<!-- Left side: Logo -->
		<router-link to="/"> <TextLogo :large="false" /> </router-link>
		<!-- Right side: links -->
		<div class="flex flex-row text-sm">
			<HeaderDropdown
				:label="`ROOS`"
				:list="[
					{ title: `BUY ROOS`, url: `/` },
					{ title: `STAKE ROOS`, url: `/` },
					{ title: `TRAITS`, url: `/` },
				]"
			/>
			<HeaderDropdown
				:label="`JOEYS`"
				:list="[
					{ title: `BUY JOEYS`, url: `/` },
					{ title: `STAKE ROOS`, url: `/` },
					{ title: `TRAITS`, url: `/` },
				]"
			/>
			<router-link to="/" class="text-white header-link p-4">TEAM</router-link>
			<router-link to="/" class="text-white header-link p-4">STAKE</router-link>
			<router-link to="/" class="text-white header-link p-4">ROADMAP</router-link>
			<router-link to="/" class="text-white header-link p-4">OFFICIAL LINKS</router-link>
			<router-link to="/" class="text-white header-link p-4">FAQ</router-link>
			<router-link to="/" class="text-white header-link p-4">PARTNERS</router-link>
			<router-link to="/" class="text-white header-link p-4">JOBS</router-link>
			<router-link to="/" class="text-white header-link p-4">SHOP</router-link>
		</div>
	</div>
</template>
