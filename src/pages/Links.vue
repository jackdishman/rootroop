<script setup lang="ts">
import { linksMap } from '@/links'
import SubpageHeader from '@/components/SubpageHeader.vue'
</script>
<template>
	<SubpageHeader :title="`Official Links`" />
	<div class="w-full px-10 text-center">
		<div v-for="l in linksMap" :key="l[0]" class="mb-6">
			<a :href="l[1]" target="_blank" class="truncate font-bold text-center text-lg underline">
				<h6>{{ l[0] }}</h6>
			</a>
		</div>
	</div>
</template>
