<script>
	import { browser } from '$app/environment';
	import Marquee from 'svelte-fast-marquee';
	import adobe from '$assets/images/sponsors/adobe.png';
	import atlassian from '$assets/images/sponsors/atlassian.png';
	import freshworks from '$assets/images/sponsors/freshworks.png';
	import google from '$assets/images/sponsors/google.png';
	import opendoor from '$assets/images/sponsors/opendoor.png';
	import paypal from '$assets/images/sponsors/paypal.png';
	import postman from '$assets/images/sponsors/postman.png';

	const height = 'h-[96px]';
</script>

<div class={height}>
	<div id="sponsor-marquee" class={`${height} w-full absolute left-0`}>
		<Marquee
			pauseOnClick={true}
			direction="right"
			class="h-full"
			speed={5 + (35 * (browser ? (window.innerWidth / 1920)  : 1))}
		>
			{#each [1, 2] as _}
				<div class="w-full flex justify-center items-center gap-x-14 mr-14">
					<span class="font-bold text-xl text-white/20">Our <br /> sponsors</span>
					<img alt="adobe" src={adobe} />
					<img alt="google" src={google} />
					<img alt="opendoor" src={opendoor} />
					<img alt="postman" src={postman} />
					<img alt="paypal" src={paypal} />
					<img alt="freshworks" src={freshworks} />
					<img alt="atlassian" src={atlassian} class="translate-y-0.5" />
				</div>
			{/each}
		</Marquee>
	</div>
</div>
