<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import Header from './components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
	<div><Header class="z-20 fixed w-full" style="height: 50px" /></div>
	<router-view class="font-poppins" />
	<Footer />
</template>
