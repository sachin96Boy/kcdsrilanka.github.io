<script>
	import { browser } from '$app/environment';
	import { Button } from '$components/common';
	import { CNCF, KCD } from '$icons';
	import { auth, getCurrentUser, initiateGoogleLogin, initiatePayment, logout } from '$services';
	import { userContext } from '$store';
	import { getContext, onMount } from 'svelte';

	const sections = ['Speakers', 'Agenda', 'Sponsors'];

	let location = browser ? window.location : '';

	const onNavItemClick = (path) => {
		document.getElementById(path)?.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};

	const registeredUser = getContext('user');

	onMount(() => {
		auth.onAuthStateChanged(async function (user) {
			if (user != null) {
				const result = await getCurrentUser();
				if (result) userContext.set(result.data);
			}
		});
	});
</script>

<header class="h-[90px] flex py-8 section-container border-none justify-between">
	<div class="flex gap-5">
		<KCD />
		<CNCF />
	</div>
	<div
		class="hidden xl:flex justify-center items-center gap-x-8 cursor-pointer"
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
			<Button class="px-5" onClick={()=>initiatePayment($registeredUser)}>Buy Tickets</Button>
			{#if $registeredUser}
				<Button
					variant="secondary"
					class="outline-white/80 text-white px-8 min-w-[150px]"
					onClick={logout}>Logout</Button
				>
			{:else}
				<Button
					variant="secondary"
					class="outline-white/80 text-white px-8 min-w-[150px]"
					onClick={initiateGoogleLogin}>Login</Button
				>
			{/if}
		{/if}
	</div>
</header>
