<script>
	import { getContext } from 'svelte';
	import { browser } from '$app/environment';
	import { Button, Skeleton } from '$components/common';
	import { CNCF, KCD } from '$icons';
	import {
		initiateGoogleLogin,
		initiatePayment,
		logout
	} from '$services';

	const sections = ['Speakers', 'Agenda', 'Sponsors'];

	let location = browser ? window.location : '';

	const onNavItemClick = (path) => {
		document.getElementById(path)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const registeredUser = getContext('user');
	const ticketDetails = getContext('ticket');
</script>

<header class="h-[90px] flex py-8 section-container border-none justify-between">
	<div class="flex gap-5">
		<KCD />
		<CNCF />
	</div>
	<div
		class="hidden xl-high:flex justify-center items-center gap-x-8 cursor-pointer"
		data-sveltekit-reload
	>
		<span class="text-xl text-white"> #KCDSL23 </span>
		{#if location.pathname === '/register'}
			<a href="/" class="text-xl text-white/60 hover:text-white transition-all duration-medium">
				<Button class="px-5">Back to Home</Button>
			</a>
		{:else}
			{#each sections as section}
				<button
					on:click={() => onNavItemClick(section.toLowerCase())}
					class="text-xl text-white/60 hover:text-white transition-all duration-medium"
				>
					{section}
				</button>
			{/each}
			{#if !$ticketDetails?.fetched || !$registeredUser?.fetched}
				<Skeleton height="40" width="146.7" class="flex justify-center items-center rounded-full"/>
				<Skeleton height="40" width="146.7" class="flex justify-center items-center rounded-full"/>
			{:else}
				{#if !$ticketDetails?.data}
					<Button class="px-5 animate-in fade-in duration-700" onClick={() => initiatePayment($registeredUser?.data)}
						>Buy Tickets</Button
					>
				{/if}
				{#if $registeredUser?.data}
					<Button
						variant="secondary"
						class="outline-white/80 text-white px-8 min-w-[150px] animate-in fade-in duration-700"
						onClick={logout}>Logout</Button
					>
				{:else}
					<Button
						variant="secondary"
						class="outline-white/80 text-white px-8 min-w-[150px] animate-in fade-in duration-700"
						onClick={initiateGoogleLogin}>Login</Button
					>
				{/if}
			{/if}
		{/if}
	</div>
</header>
