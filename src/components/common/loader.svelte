<script>
	import { ProgressRadial } from '@skeletonlabs/skeleton';
	import { Subheading } from './typography';
	import { twMerge } from 'tailwind-merge';
	import { getContext } from 'svelte';

	const loader = getContext('loader');
</script>

<div
	class={twMerge(
		'fixed w-full h-full inset-0 bg-black/30 backdrop-blur-[8px] flex justify-center items-center z-50 transition-all duration-medium',
		$loader.show ? 'opacity-100' : 'pointer-events-none opacity-0'
	)}
>
	<div
		class="p-16 md:p-24 m-6 bg-black/50 backdrop-blur-md rounded-xl flex flex-col justify-center items-center gap-12"
	>
		<ProgressRadial ... stroke={50} meter="stroke-white" track="stroke-white/20" />
		{#if $loader.text}
            <Subheading class="text-3xl max-w-md text-center">{$loader.text}</Subheading>
        {/if}
	</div>
</div>
