<script>
	import { Button, Heading } from '$components/common';
	import sponsorGroups from './data';
</script>

<div id="sponsors" class="flex flex-col pt-20 py-24 section-container gap-y-16">
	<div class="flex flex-col xl:flex-row gap-y-12 gap-x-24 text-center xl:text-start">
		<div class="flex-1 flex flex-col gap-10 p-section-inner">
			<Heading>KCD Sri Lanka Sponsors</Heading>
			<span class="font-inter text-xl text-white/50 leading-8"
				>Lorem ipsum dolor sit amet, consectetur ascing elit. Dictum sollicitudin diam ac lorem cras
				tellus faMorbi dictum ut sed pellentesque gravida id tristique.</span
			>
			<Button variant="secondary" class="self-center xl:self-start mt-12">Become Sponsor</Button>
		</div>
		<div class="flex-1 flex flex-col p-section-inner font-inter text-xl text-white/50 gap-12">
			{#each sponsorGroups as { category, sponsors }}
				<div>
					<span class="font-medium text-2xl xl:text-[32px] text-white leading-8"
						>{category} Sponsors</span
					>
					<div class="w-full flex justify-center xl:justify-start flex-wrap gap-12 mt-12">
						{#each sponsors as sponsor}
							<img alt="sponsor" src={sponsor} class="max-w-[150px]" />
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
