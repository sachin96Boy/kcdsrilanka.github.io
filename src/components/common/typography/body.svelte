<script>
	import { twMerge } from 'tailwind-merge';
</script>

<span {...$$restProps} class={twMerge('font-inter text-xl text-white/50 leading-8', $$restProps.class)}><slot /></span>
