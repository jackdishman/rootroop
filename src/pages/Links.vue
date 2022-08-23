<script setup lang="ts">
import { linksMap } from '@/links'
import SubpageHeader from '@/components/SubpageHeader.vue'
</script>
<template>
	<SubpageHeader :title="`Official Links`" />
	<div class="flex justify-center">
		<div class="w-full md:w-548 px-10">
			<div v-for="l in linksMap" :key="l[0]" class="grid grid-cols-2 overflow-none mb-6">
				<h6>{{ l[0] }}</h6>
				<a :href="l[1]" target="_blank" class="truncate"> {{ l[1] }} </a>
			</div>
		</div>
	</div>
</template>
