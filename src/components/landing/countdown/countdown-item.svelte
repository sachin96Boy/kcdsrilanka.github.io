<script>
	export let value = 0;
	export let label = '';
</script>

<div class="w-full flex flex-col justify-center items-center">
	<span class="text-4xl sm:text-5xl md:text-7xl lg:text-[96px] text-stroke-1"> {value} </span>
	<span class="text-xl md:text-2xl text-stroke mt-2">{label}</span>
</div>
