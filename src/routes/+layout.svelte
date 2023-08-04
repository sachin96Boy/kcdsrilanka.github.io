<script>
	import { Toaster } from 'svelte-french-toast';
	import { Background, Header, Footer } from '$components';
	import { initStore } from '$store';
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
		<Toaster />
	</div>
</div>
