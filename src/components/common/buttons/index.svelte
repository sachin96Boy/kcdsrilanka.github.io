<script>
	import Primary from './primary.svelte';
	import Secondary from './secondary.svelte';

	export let variant = 'primary';
</script>

{#if variant === 'primary'}
	<Primary {...$$restProps}>
		<slot />
	</Primary>
{:else if variant === 'secondary'}
	<Secondary {...$$restProps}>
		<slot />
	</Secondary>
{/if}
