<script>
	import { twMerge } from 'tailwind-merge';
</script>

<span {...$$restProps} class={twMerge('font-medium text-2xl md:text-3xl xl:text-[32px] text-white leading-8', $$restProps.class)}><slot /></span>
