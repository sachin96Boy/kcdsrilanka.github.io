<script>
	import { Button } from '$components/common';
	import { CNCF, KCD } from '$icons';

	const sections = ['Speakers', 'Agenda', 'Sponsors'];

	const onNavItemClick = (/** @type {string} */ path) => {
		window.scrollTo({
			top: (document.getElementById(path)?.offsetTop ?? 0) - 138,
			behavior: 'smooth'
		});
	};
</script>

<header class="h-[90px] flex py-8 section-container border-none justify-between">
	<div class="flex gap-5">
		<KCD />
		<CNCF />
	</div>
	<div class="hidden xl:flex justify-center items-center gap-x-8 cursor-pointer">
		<span class="text-xl text-white"> #KCDSL23 </span>
		{#each sections as section}
			<button
				on:click={() => onNavItemClick(section.toLowerCase())}
				class="text-xl text-white/60 hover:text-white transition-all duration-medium"
			>
				{section}
			</button>
		{/each}
		<a href="https://eventshere.lk" target="_blank"><Button>Buy Tickets</Button></a>
	</div>
</header>
