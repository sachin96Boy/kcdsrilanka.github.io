<script>
	import { twMerge } from 'tailwind-merge';
</script>

<span {...$$restProps} class={twMerge('text-[42px] lg:text-5xl font-bold leading-[150%]', $$restProps.class)}><slot /></span>
