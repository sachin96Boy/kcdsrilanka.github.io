<script>
	import { twMerge } from 'tailwind-merge';
	export let id;
	export let label;
	export let value;
	export let defaultValue;

	export let onChange = () => {};
</script>

<div class="flex gap-3 items-center">
	<input
		{id}
		type="radio"
		on:change={onChange}
		{...$$restProps}
		class={twMerge('w-5 h-5', $$restProps.class)}
		checked={defaultValue === value}
		{value}
	/>
	<label for={id}>{label}</label>
</div>
