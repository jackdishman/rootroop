<script setup lang="ts">
import TextLogo from '@/components/TextLogo.vue'
</script>
<template>
	<!-- Roo image -->
	<div class="relative" style="height: 450px">
		<img :src="require(`@/assets/images/roo.png`)" class="absolute w-full" style="height: 450px" />
		<div class="flex items-center justify-center h-full relative"><TextLogo /></div>
	</div>
</template>
