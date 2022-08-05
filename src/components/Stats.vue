<template>
	<div class="flex justify-center bg-rooBlack p-10">
		<div class="w-full">
			<h4 class="text-white font-bold text-center uppercase mb-5">Our proud stats</h4>
			<div class="grid grid-cols-4 divide-x divide-rooRed">
				<div>
					<h2 class="text-4xl text-rooRed text-center">5.5K</h2>
					<p class="text-white font-normal text-center uppercase">Items</p>
				</div>
				<div>
					<h2 class="text-4xl text-rooRed text-center">2.3K</h2>
					<p class="text-white font-normal text-center uppercase">Owners</p>
				</div>
				<div>
					<div class="flex justify-center">
						<img :src="require(`@/assets/images/logos/eth.png`)" />
						<h2 class="text-4xl text-rooRed text-center">874</h2>
					</div>
					<p class="text-white font-normal text-center uppercase">Total volume</p>
				</div>
				<div>
					<div class="flex justify-center">
						<img :src="require(`@/assets/images/logos/eth.png`)" />
						<h2 class="text-4xl text-rooRed text-center">0.18</h2>
					</div>
					<p class="text-white font-normal text-center uppercase">Floor price</p>
				</div>
			</div>
		</div>
	</div>
</template>
