<script>
	import { twMerge } from 'tailwind-merge';
</script>

<span {...$$restProps} class={twMerge('typography-subheading', $$restProps.class)}><slot /></span>
