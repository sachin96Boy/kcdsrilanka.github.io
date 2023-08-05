<script>
	import { twMerge } from 'tailwind-merge';

	export let color = 'white';
</script>

<svg
	viewBox="0 0 15 8"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	{...$$restProps}
	class={twMerge('h-[8px] w-[15px]', $$restProps.class)}
>
	<path d="M1.28906 1L7.64492 7L1.28906 1ZM7.64492 7L14.0008 1L7.64492 7Z" fill={color} />
	<path
		d="M1.28906 1L7.64492 7L14.0008 1"
		stroke="white"
		stroke-opacity="0.6"
		stroke-width="2"
		stroke-linecap="round"
		stroke-linejoin="round"
	/>
</svg>
