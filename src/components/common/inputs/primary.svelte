<script>
	import { twMerge } from 'tailwind-merge';

	export let disabled = false;
	export let onChange = () => {};
</script>

<input
	type="text"
	{disabled}
	on:input={onChange}
	{...$$restProps}
	class={twMerge(
		'border-2 border-white/40 focus:border-white/70 bg-transparent outline-none outline-black rounded-md w-full py-4 px-4 text-lg transition-all duration-medium',
		disabled ? 'cursor-not-allowed bg-white/10' : 'cursor-text',
		$$restProps.class
	)}
/>
