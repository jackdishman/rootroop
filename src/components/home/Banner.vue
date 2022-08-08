<template>
	<div class="flex flex-row overflow-hidden relative">
		<div
			class="absolute w-full bg-green-500 h-10"
			style="background: linear-gradient(90deg, #415c5f -1.84%, #c4cdd5 51.13%, #131d1c 101.94%)"
		></div>
		<!-- floating announcements -->
		<div id="ticker" class="anchor h-10 z-10">
			<div class="ticker-wrap h-10 flex items-center" style="background: transparent">
				<div class="ticker">
					<div class="ticker__item">
						<p class="text-uppercase text-white font-bold italic">
							<span class="pr-5">NEWS:</span>JOEYBEANS SOLD OUT!<span class="pr-5 pl-1">BUY ON OPENSEA</span
							><span class="pr-10">CHECK OUT THE NEW ROO TROOP BOUNTY HUB AND $ROOLAH SHOP!</span
							><span class="pr-10"
								>STØNE & JON WILL BE HOSTING A PANEL AT NFT NYC ON HOW TO MAKE WEB3 JOBS ACCESSIBLE.</span
							>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style>
/* #ticker {
	position: absolute;
	height: 35px;
	left: 0px;
	top: 537px;
	background: linear-gradient(90deg, #415c5f -1.84%, #c4cdd5 51.13%, #131d1c 101.94%);
} */

@-webkit-keyframes ticker {
	0% {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}
	100% {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}
}
@keyframes ticker {
	0% {
		-webkit-transform: translate3d(0, 0, 0);
		transform: translate3d(0, 0, 0);
		visibility: visible;
	}
	100% {
		-webkit-transform: translate3d(-100%, 0, 0);
		transform: translate3d(-100%, 0, 0);
	}
}
.ticker-wrap {
	position: static;
	bottom: 0;
	width: 100%;
	overflow: hidden;
	background-color: rgba(0, 0, 0, 0.9);
	padding-left: 100%;
	box-sizing: content-box;
}
.ticker-wrap .ticker {
	display: inline-block;
	/* height: 4rem;
	line-height: 4rem; */
	white-space: nowrap;
	padding-right: 50%;
	box-sizing: content-box;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
	-webkit-animation-timing-function: linear;
	animation-timing-function: linear;
	-webkit-animation-name: ticker;
	animation-name: ticker;
	-webkit-animation-duration: 30s;
	animation-duration: 30s;
}
.ticker-wrap .ticker__item {
	display: inline-block;
}

body {
	padding-bottom: 5rem;
}
</style>
