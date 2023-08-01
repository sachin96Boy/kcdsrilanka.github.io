<script>
	import artwork from '$assets/images/background-artwork.png';
	import procession from '$assets/images/procession.png';
</script>

<div class="w-full h-full absolute top-0 left-0 gradient-background bg-cover bg-center">
	<img
		alt="procession"
		src={procession}
		class="absolute bottom-[96px] w-full object-cover opacity-75 z-10 animate-in fade-in duration-500"
	/>
	<img
		alt="procession"
		src={artwork}
		class="w-full h-full pb-[96px] object-cover z-10 grayscale opacity-10 animate-in fade-in duration-500"
	/>
</div>
