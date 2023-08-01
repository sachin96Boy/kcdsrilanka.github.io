<script>
	import { twMerge } from 'tailwind-merge';
</script>

<span {...$$restProps} class={twMerge('text-center xl:text-start text-[42px] lg:text-5xl font-bold leading-[150%]', $$restProps.class)}><slot /></span>
