<script>
	import { Heading } from '$components/common';
	import speakers from './data';
	import Speaker from './speaker.svelte';
</script>

<div id="speakers" class="flex flex-col pt-20 py-24 section-container gap-y-16 relative z-[2]">
	<Heading>Speakers</Heading>
	<div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[30px]">
		{#each speakers as speaker}
			<Speaker {speaker} />
		{/each}
	</div>
</div>
