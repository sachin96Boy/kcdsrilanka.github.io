<script>
	import { twMerge } from 'tailwind-merge';

	export let onClick = () => {};
</script>

<button
	on:click={onClick}
	{...$$restProps}
	class={twMerge('btn-primary', $$restProps.class )}
>
	<slot />
</button>