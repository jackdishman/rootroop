<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
import router from '@/router/index'
</script>

<template class="font-poppins">
	<div v-if="router.currentRoute.value.fullPath !== `/`"><Header class="z-20 fixed w-full" style="height: 50px" /></div>
	<router-view />
	<Footer v-if="router.currentRoute.value.fullPath !== `/`" />
</template>
