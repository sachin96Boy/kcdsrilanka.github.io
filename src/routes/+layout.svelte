<script>
	import { Toast } from '@skeletonlabs/skeleton';
	import { Background, Header, Footer, Loader } from '$components';
	import { initStore } from '$store';

	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import '$styles/styles.css';

	initStore();
</script>

<div
	class="flex flex-col overflow-x-hidden min-h-screen max-w-body bg-black font-ubuntu text-white"
>
	<Background />
	<div class="z-10">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
		<Loader />
		<Toast position="br"  />
	</div>
</div>
