<script>
	import { SocialIcon } from '$components/common';
	import { Linkedin, Twitter } from '$icons';

	export let speaker = {};
</script>

<div class="flex flex-col gap-3 p-4 2xl:p-5 bg-black animated-border from-white to-white/10">
	<img alt="speaker" src={speaker.image} />
	<span class="text-2xl text-purple font-medium mt-3">{speaker.name}</span>
	<span class="text-lg">{speaker.company}</span>
	<div class="flex gap-3 mt-2">
		{#if speaker.twitter}
			<SocialIcon href={speaker.twitter}>
				<Twitter />
			</SocialIcon>
		{/if}
		{#if speaker.linkedin}
			<SocialIcon href={speaker.linkedin}>
				<Linkedin />
			</SocialIcon>
		{/if}
	</div>
</div>
