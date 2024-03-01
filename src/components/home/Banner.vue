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
							<span class="pr-5">NEWS: </span>
							<span class="pr-10 pl-1">ROO TROOP & JOEY MOB TO RE-LAUNCH AND TRADE SOLELY ON BUY.ROOTROOP.COM</span>
							<span class="pr-10 pl-1">ROO TROOP INTEGRATION ON NEW DAWN TRAIT SWAPPING MARKETPLACE COMING SOON</span>
							<span class="pr-10 pl-1">HOLDERS CAN NOW LIST AND BUY SERVICES, PRODUCTS & NFTS ON THE $ROOLAH SHOP</span>
							<span class="pr-10 pl-1">NEW TEAM MEMBERS ANNOUNCED, SCROLL DOWN TO LEARN MORE</span>
							<span class="">MAKE SURE TO CHECK OUT OUR GITBOOK FOUND UNDER THE ROADMAP SECTION </span>
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
	padding-left: 100vw;
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
</style>
