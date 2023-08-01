<script>
	import { Heading } from '$components/common';
	import Speaker from '$components/speakers/speaker.svelte';
	import organizers from './data';
</script>

<div class="flex flex-col pt-20 py-24 section-container gap-y-16">
	<Heading>Organizers</Heading>
	<div
		class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[30px]"
	>
		{#each organizers as organizers}
			<Speaker speaker={organizers} />
		{/each}
	</div>
</div>
