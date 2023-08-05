<script>
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { Toast, Modal } from '@skeletonlabs/skeleton';
	import { Background, Header, Footer, Loader } from '$components';
	import { initStore } from '$store';

	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '$styles/styles.css';

	initStore();

	onMount(() => {
		if (browser) {
			const urlParams = new URLSearchParams(window.location.search);
			const scroll = urlParams.get('scroll');
			if (scroll) {
				document.getElementById(scroll)?.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
				window.history.replaceState({}, '', '/');
			}
		}
	});
</script>

<div
	class="flex flex-col overflow-hidden min-h-screen max-w-body bg-black font-ubuntu text-white"
>
	<Background />
	<div class="z-10">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
		<Loader />
		<Toast position="br" />
		<Modal
			background="bg-card border border-white/20 p-8 py-[40px]"
			buttonTextCancel="Close"
			buttonNeutral="btn-secondary"
			buttonPositive="btn-primary text-black"
			regionBackdrop="backdrop"
			regionHeader="typography-subheading"
			regionBody="typography-body"
			regionFooter="flex flex-row-reverse justify-end gap-x-4 pt-2"
			spacing="space-y-5"
			duration={300}
		/>
	</div>
</div>
