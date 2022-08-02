<template>
	<div class="flex flex-row overflow-hidden">
		<section id="ticker" class="anchor">
			<div class="ticker-wrap" style="background: rgba(0, 0, 0, 0.84)">
				<div class="ticker">
					<div class="ticker__item">
						<p class="text-uppercase">
							<span class="pr-5">NEWS:</span>JOEYBEANS SOLD OUT!<span class="pr-5">BUY ON OPENSEA</span
							><span class="pr-10">CHECK OUT THE NEW ROO TROOP BOUNTY HUB AND $ROOLAH SHOP!</span
							><span class="pr-10"
								>STØNE & JON WILL BE HOSTING A PANEL AT NFT NYC ON HOW TO MAKE WEB3 JOBS ACCESSIBLE.</span
							>
						</p>
					</div>
				</div>
			</div>
		</section>
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
	height: 4rem;
	background-color: rgba(0, 0, 0, 0.9);
	padding-left: 100%;
	box-sizing: content-box;
	z-index: 10;
}
.ticker-wrap .ticker {
	display: inline-block;
	height: 4rem;
	line-height: 4rem;
	white-space: nowrap;
	padding-right: 100%;
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
	padding: 0 2rem;
	font-size: 2rem;
	color: white;
}

body {
	padding-bottom: 5rem;
}

h1,
h2,
p {
	padding: 0 5%;
}
</style>
