<script>
	import { Header, Footer } from '$components/layout';
	import Background from '$components/background.svelte';
	import '$styles/styles.css';
</script>

<div
	class="flex flex-col overflow-x-hidden min-h-screen max-w-body bg-black font-ubuntu text-white px-8 sm:px-10 md:px-12 lg:px-20 xl:px-28"
>
	<Background />
	<div class="z-10">
		<Header />
		<main>
			<slot />
		</main>
		<Footer />
	</div>
</div>
