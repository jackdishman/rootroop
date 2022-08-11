<script setup lang="ts">
import SubpageHeader from '@/components/SubpageHeader.vue'
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
</script>

<template>
	<SubpageHeader :title="`Partnerships`" />
	<div class="flex justify-center">
		<div class="mb-10">
			<!-- Partners -->
			<div class="flex flex-row px-32">
				<img :src="require(`@/assets/images/logos/sappy_seals.png`)" class="w-32 h-32" />
				<div class="ml-16">
					<h3>Sappy Seals</h3>
					<RedUnderscore />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
