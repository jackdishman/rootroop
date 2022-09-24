<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
import AudioPlayer from './components/AudioPlayer.vue'
import router from '@/router/index'
</script>

<template>
	<main class="m-0 h-screen overflow-x-hidden p-0 font-poppins">
		<div v-if="router.currentRoute.value.fullPath !== `/`">
			<Header class="z-20 fixed w-full" style="height: 50px" />
		</div>
		<router-view />
		<Footer v-if="router.currentRoute.value.fullPath !== `/`" />
		<!-- Audio player -->
		<div v-if="router.currentRoute.value.fullPath !== `/`" class="fixed bottom-0 z-10 w-full p-5">
			<!-- <audio controls class="w-full h-10">
				<source :src="require(`@/assets/audio/jungle.mp3`)" type="audio/mpeg" />
			</audio> -->
			<AudioPlayer />
		</div>
		<div id="popup"></div>
	</main>
</template>

<style>
* {
	margin: 0;
	padding: 0;
}
</style>
