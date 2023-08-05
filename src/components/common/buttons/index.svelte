<script>
	import Primary from './primary.svelte';
	import Secondary from './secondary.svelte';

	export let variant = 'primary';
	export let onClick = () => {};
</script>

{#if variant === 'primary'}
	<Primary onClick={onClick} {...$$restProps}>
		<slot />
	</Primary>
{:else if variant === 'secondary'}
	<Secondary onClick={onClick} {...$$restProps}>
		<slot />
	</Secondary>
{/if}
