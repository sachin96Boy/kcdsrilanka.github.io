<script>
	import { twMerge } from 'tailwind-merge';

	export let onClick = () => {};
</script>

<button
	on:click={onClick}
	{...$$restProps}
	class={twMerge(
		'flex justify-center items-center cursor-pointer rounded-[40px] px-[1.15rem] py-[0.4rem] text-xl transition-all duration-medium splash',
		'outline filter hover:contrast-[2] bg-transparent outline-white/50 text-white/50 hover:text-white',
		$$restProps.class
	)}
>
	<slot />
</button>
