<script>
	import Arrow from '$icons/arrow.svelte';
	import { onMount } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	export let disabled = false;
	export let id = '';
	export let name = '';
	export let value = '';
	export let options = [];
	export let onChange = () => {};

	$: selected = options.find((option) => option.value === value)?.label || value;

	$: open = false;

	const computedId = id || Math.random().toString(36).substring(2);

	const onSelect = (value) => {
		open = false;
		onChange({ target: { name, value: value } });
	};

	const clickListener = (e) => {
		if (e.target.id !== computedId) {
			open = false;
		}
	};

	onMount(() => {
		document.addEventListener('click', clickListener);
		return () => document.removeEventListener('click', clickListener);
	});
</script>

<div class="relative text-lg">
	<input
		id={computedId}
		type="text"
		autocomplete="off"
		{name}
		value={selected}
		on:click={() => (open = !open)}
		on:input={onChange}
		{...$$restProps}
		class={twMerge(
			'border-2 border-white/10 focus:border-white/50 bg-card outline-none w-full py-4 px-4 transition-all duration-medium',
			disabled ? 'cursor-not-allowed bg-white/10' : 'cursor-pointer',
			$$restProps.class
		)}
	/>
	{#if open}
		<div
			class="absolute w-full left-0 z-10 mt-4 origin-top-right rounded-md bg-black/80 backdrop-blur-md border-2 border-white/10 focus:border-white/50"
			role="menu"
			aria-orientation="vertical"
			aria-labelledby="menu-button"
			tabIndex="-1"
		>
			{#each options as option}
				<div
					class="text-white/50 block px-4 py-4 cursor-pointer hover:bg-white/10 hover:text-white transition-all duration-medium"
					role="menuitem"
					tabindex="-1"
					id="menu-item-0"
					on:click={() => {
						onSelect(option.value);
					}}
					on:keypress={() => onSelect(option.value)}
				>
					{option.label}
				</div>
			{/each}
		</div>
	{/if}
	<div class="pr-5 absolute inset-0 flex justify-end items-center pointer-events-none">
		<Arrow class={twMerge('transition-all duration-medium', open ? 'transform rotate-180' : '')} />
	</div>
</div>
