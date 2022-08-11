<script setup lang="ts">
import SubpageHeader from '@/components/SubpageHeader.vue'
import RedUnderscore from '@/components/icons/RedUnderscore.vue'
</script>

<template>
	<SubpageHeader :title="`Partnerships`" />
	<div class="flex justify-center">
		<div class="mb-10">
			<!-- Sappy seals -->
			<div class="flex flex-row px-32 mb-10">
				<img :src="require(`@/assets/images/logos/sappy_seals.webp`)" class="w-32 object-contain flex-shrink-0" />
				<div class="ml-16">
					<h3 class="text-3xl font-semibold italic uppercase mb-3">Sappy Seals</h3>
					<RedUnderscore />
					<p class="pt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</div>
			<!-- eth aliens -->
			<div class="flex flex-row px-32 mb-10">
				<img :src="require(`@/assets/images/logos/eth_alien.webp`)" class="w-32 object-contain flex-shrink-0" />
				<div class="ml-16">
					<h3 class="text-3xl font-semibold italic uppercase mb-3">ethaliens</h3>
					<RedUnderscore />
					<p class="pt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</div>
			<!-- Sappy seals -->
			<div class="flex flex-row px-32 mb-10">
				<img :src="require(`@/assets/images/logos/asteria_labs.webp`)" class="w-32 object-contain flex-shrink-0" />
				<div class="ml-16">
					<h3 class="text-3xl font-semibold italic uppercase mb-3">asteria labs</h3>
					<RedUnderscore />
					<p class="pt-5">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
						dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
						ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
						nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
				</div>
			</div>
			<!-- GAC -->
			<div class="flex flex-row px-32">
				<img :src="require(`@/assets/images/logos/gac.webp`)" class="w-32 object-contain flex-shrink-0" />
				<div class="ml-16">
					<h3 class="text-3xl font-semibold italic uppercase mb-3">gac</h3>
					<RedUnderscore />
					<p class="pt-5">
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
	<div class="flex justify-center">
		<img :src="require(`@/assets/images/combo_logo.webp`)" alt="Logo" />
	</div>
</template>
