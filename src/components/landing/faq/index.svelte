<script>
	import { BodyText, Subheading, Button, Heading } from '$components/common';
	import faqs from './data';
</script>

<div id="sponsors" class="flex flex-col pt-20 py-24 section-container gap-y-16">
	<div class="flex flex-col xl:flex-row gap-y-12 gap-x-24 text-center xl:text-start">
		<div class="flex-1 flex flex-col gap-10 p-section-inner">
			<Heading class="xl:w-3/4">Frequently Asked Questions</Heading>
			<BodyText
				>Lorem ipsum dolor sit amet, consectetur ascing elit. Dictum sollicitudin diam ac lorem cras
				tellus faMorbi dictum ut sed pellentesque gravida id tristique.</BodyText
			>
			<Button variant="secondary" class="self-center xl:self-start mt-12">Chat with us</Button>
		</div>
		<div class="flex-1 flex flex-col p-section-inner font-inter text-xl text-white/50 mt-12 xl:mt-0">
			{#each faqs as { question, answer }}
				<Subheading class="mb-12">{question}</Subheading>
				{#if answer}
					<BodyText class="mb-12">{answer}</BodyText>
				{/if}
			{/each}
		</div>
	</div>
</div>
