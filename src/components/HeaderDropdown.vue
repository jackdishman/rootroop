<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ChevronDown from './icons/ChevronDown.vue'
import router from '@/router/index'

const props = defineProps<{
	label: string
	list: { title: string; url?: string }[]
	expandedText: boolean
	id: string
}>()

const showDropdown = ref<boolean>(false)

const handleRoadmap = () => {
	if (router.currentRoute.value.name === `Home`) {
		const container = document.getElementById(`roadmap`)
		container?.scrollIntoView()
		return
	}
	router.push({
		path: '/home',
		hash: '#roadmap',
	})
}

onMounted(() => {
	document.addEventListener(`click`, (e: Event) => {
		// Dropdown not open
		if (!showDropdown.value || !e) {
			return
		}
		// If clicking another component
		if (!e.target?.classList.contains(props.id)) {
			showDropdown.value = false
		}
	})
})

const handleDropdown = () => {
	showDropdown.value = !showDropdown.value
}
</script>

<template>
	<div class="relative">
		<button :class="id" class="flex text-white header-link px-4 focus:outline-none my-4" @click="handleDropdown">
			{{ label }}<ChevronDown :class="id" class="ml-2" :style="showDropdown ? `transform: rotate(180deg)` : ``" />
		</button>
		<div
			v-show="showDropdown"
			class="z-10 lg:absolute flex flex-col bg-black text-white opacity-90 rounded-b pt-2"
			:class="expandedText ? `w-44` : `w-full`"
			style="margin-top: 1px"
		>
			<div v-for="li in list" :key="li.title" class="w-full text-center font-semibold pb-2">
				<a v-if="li.title !== `ROADMAP`" :href="li.url" target="_blank">{{ li.title }}</a>
				<button v-else @click="handleRoadmap">{{ li.title }}</button>
			</div>
		</div>
	</div>
</template>
