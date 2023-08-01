<script>
	export let href = '';
</script>

<a {href} target="_blank" {...$$restProps} class="group border border-white/10 p-1.5">
	<div
		class="[&>svg]:opacity-50 [&>svg]:group-hover:opacity-100 [&>svg]:transition-all [&>svg]:duration-medium"
	>
		<slot />
	</div>
</a>
