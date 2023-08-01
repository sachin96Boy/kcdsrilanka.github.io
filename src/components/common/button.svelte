<script>
	import { twMerge } from 'tailwind-merge';

	export let className = '';
</script>

<button
	class={twMerge(
		'flex justify-center items-center cursor-pointer rounded-[40px] px-[1.15rem] py-[0.4rem] bg-white text-xl text-purple transition-all duration-medium splash',
        "outline outline-transparent filter hover:bg-transparent hover:text-white hover:outline-white/60 hover:contrast-[2]",
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
