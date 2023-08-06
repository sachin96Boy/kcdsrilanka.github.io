<script>
	import { KCDLarge } from '$icons';
	export let animate = true;
</script>

<div
	class="min-h-[calc(100vh-186px)] flex flex-col justify-center items-center gap-8 section-container border-none"
>
	<KCDLarge class={animate ? 'animate-in fade-in duration-700' : ''} />
	<span class="flex flex-col gap-4 text-center font-bold text-5xl md:text-[56px]">
		<span class={animate ? 'animate-in slide-in-from-left duration-700' : ''}>
			Kubernetes Community Days
		</span>
		<span class={animate ? 'animate-in slide-in-from-right duration-700' : ''}>
			Sri Lanka 2023
		</span>
	</span>
</div>
