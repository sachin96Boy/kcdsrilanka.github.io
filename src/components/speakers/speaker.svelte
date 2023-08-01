<script>
	import { Linkedin, Twitter } from '$icons';

	export let speaker = {};
</script>

<div class="flex flex-col gap-3 p-4 2xl:p-5 bg-black animated-border from-white to-white/10">
    <img alt="speaker" src={speaker.image} />
	<span class="text-2xl text-purple font-medium mt-3">{speaker.name}</span>
	<span class="text-lg">{speaker.company}</span>
	<div class="flex gap-3 mt-2">
		{#if speaker.twitter}
			<a href={speaker.twitter} target="_blank" class="group border border-white/10 p-1.5">
				<Twitter class="opacity-50 group-hover:opacity-100 transition-opacity duration-medium" />
			</a>
		{/if}
		{#if speaker.linkedin}
			<a href={speaker.linkedin} target="_blank" class="group border border-white/10 p-1.5">
				<Linkedin class="opacity-50 group-hover:opacity-100 transition-opacity duration-medium" />
			</a>
		{/if}
	</div>
</div>
