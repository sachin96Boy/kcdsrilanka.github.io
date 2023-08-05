<script>
	import { twMerge } from 'tailwind-merge';
</script>

<span {...$$restProps} class={twMerge('typography-body', $$restProps.class)}><slot /></span>
