<script>
	import { SocialIcon, BodyText } from '$components/common';
	import { KCDLarge, Linkedin, Twitter } from '$icons';

	const linkSet1 = [
		'KCD SL',
		'Speakers',
		'Agenda',
		'Ticket',
		'Sponsors',
		'Recap',
		'Organizers',
		'FAQ'
	];
	const linkSet2 = ['Contact', 'CNCF Chapter', 'CNCF', 'K8'];
</script>

<footer class="w-full flex py-24 border-t border-white/10">
	<div class="p-section-container grid grid-cols-1 md:grid-cols-6 gap-12">
		<div class="col-span-3 w-full md:w-1/2 flex flex-col gap-8">
			<KCDLarge class="w-[140px] h-[140px]" />
			<BodyText class="text-white/60">Lorem ipsum dolor sit amet, consectetur ascing elit. Dictum sollicitudin diam ac lorem cras
				tellus faMorbi dictum ut sed pellentesque gravida id tristique.</BodyText
			>
			<div class="flex gap-5">
				<SocialIcon>
					<Twitter />
				</SocialIcon>
				<SocialIcon>
					<Linkedin />
				</SocialIcon>
				<SocialIcon>
					<Twitter />
				</SocialIcon>
				<SocialIcon>
					<Linkedin />
				</SocialIcon>
			</div>
		</div>
		<div class="col-span-2 flex flex-col gap-8">
			{#each linkSet1 as link}
				<a
					href=""
					target="_blank"
					class="text-xl text-white/60 hover:text-white transition-all duration-medium"
				>
					{link}
				</a>
			{/each}
		</div>
		<div class="flex flex-col gap-8">
			{#each linkSet2 as link}
				<a
					href=""
					target="_blank"
					class="text-xl text-white/60 hover:text-white transition-all duration-medium"
				>
					{link}
				</a>
			{/each}
		</div>
	</div>
</footer>
