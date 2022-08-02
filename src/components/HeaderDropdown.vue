<template>
	<div class="relative">
		<button class="flex text-white header-link px-4 focus:outline-none my-4" @click.stop="showDropdown = !showDropdown">
			{{ label }}<ChevronDown class="ml-2" :style="showDropdown ? `transform: rotate(180deg)` : ``" />
		</button>
		<div
			v-show="showDropdown"
			class="z-10 absolute flex flex-col bg-black text-white opacity-90"
			style="margin-top: 1px"
		>
			<div v-for="li in list" :key="li.title">
				<router-link :to="`${li.url}`">{{ li.title }}</router-link>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChevronDown from './icons/ChevronDown.vue'

defineProps<{
	label: string
	list: { title: string; url: string }[]
}>()

const showDropdown = ref<boolean>(false)

onMounted(() => {
	document.addEventListener(`click`, (e) => {
		// Dropdown is closed
		if (!showDropdown.value) {
			return
		}
		showDropdown.value = false
	})
})
</script>
