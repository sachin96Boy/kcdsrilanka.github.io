<script>
	import { twMerge } from 'tailwind-merge';

	export let className = '';
</script>

<button
	class={twMerge(
		'group flex justify-center items-center cursor-pointer rounded-[40px] px-[1.15rem] py-[0.4rem] bg-white text-xl text-purple outline-none transition-all duration-medium splash',
		className
	)}
	{...$$restProps}
>
	<slot />
</button>
