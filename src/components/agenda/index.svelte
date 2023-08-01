<script>
	import { Button, Heading } from '$components/common';
	import Agenda from './agenda-item.svelte';
	import agenda from './data';
</script>

<div class="flex flex-col pt-20 py-24 section-container gap-y-16">
	<Heading>Agenda</Heading>
	<div class="w-full flex flex-col gap-y-16">
		{#each agenda as item}
			<Agenda item={item} />
		{/each}
	</div>
    <Button variant="secondary" class="self-center xl:self-start xl:-translate-y-20">Checkout the full agenda</Button>
</div>
