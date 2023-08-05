<script>
	import { twMerge } from 'tailwind-merge';

	export let onClick = () => {};
</script>

<button
	on:click={onClick}
	{...$$restProps}
	class={twMerge('btn-secondary', $$restProps.class)}
>
	<slot />
</button>
