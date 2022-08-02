<script setup lang="ts">
import TextLogo from '@/components/TextLogo.vue'
import InstagramLogo from '@/components/icons/Instagram.vue'
import TwitterLogo from '@/components/icons/Twitter.vue'
import DiscordLogo from '@/components/icons/Discord.vue'
import OpenSeaLogo from '@/components/icons/OpenSea.vue'
import NewsBanner from '@/components/Banner.vue'
</script>
<template>
	<!-- Roo image -->
	<div class="relative" style="height: 450px">
		<img :src="require(`@/assets/images/roo.png`)" class="absolute w-full" style="height: 450px" />
		<div class="flex items-center justify-center h-full relative"><TextLogo :large="true" /></div>
		<!-- Social links -->
		<div class="flex items-center justify-center relative -mt-24">
			<a href=""><InstagramLogo /></a>
			<a href="" class="mx-2"><TwitterLogo /></a>
			<a href="" class="mr-2"><DiscordLogo /></a>
			<a href=""><OpenSeaLogo style="width: 24px; height: 24px" /></a>
		</div>
	</div>
	<NewsBanner />
</template>
