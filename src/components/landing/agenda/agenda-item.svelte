<script>
	import { Subheading } from '$components/common';
	import { Clock } from '$icons';
	import speakers from '../speakers/data.js';

	export let item = {};

	$: speaker = speakers.find((speaker) => speaker.name === item.speaker);
</script>

<div class="flex flex-col xl:flex-row text-center xl:text-start gap-y-12 gap-x-24">
	<div class="flex-1 flex flex-col gap-6">
		<div class="badge">
			<Clock class="clock mr-1" />
			{item.start} - {item.end} GMT +5:30
		</div>
		<Subheading class="w-full xl:w-10/12 leading-[42px]">{item.topic}</Subheading>
	</div>
	<div
		class="flex-1 flex flex-col gap-12 border bg-card border-white/10 p-5 text-xl leading-8 text-white/70 font-inter"
	>
		<span>
			Did you ever notice your cursor is solid when you’re typing but blinking when you’re not, and
			that is true in every text editor? There are hundreds of primitives in UI design that started
			small—little choices made by designers—and later turned into norms used by the industry.
		</span>
		<div class="flex flex-col xs:flex-row justify-center xl:justify-start items-center gap-4">
			<img src={speaker.image} alt="speaker" class="rounded-full h-[68px] w-[68px]" />
			<div class="flex flex-col items-center xs:items-start text-white/50">
				<span>by &nbsp;<span class="text-purple">{speaker.name}</span></span>
				<span>{speaker.company}</span>
			</div>
		</div>
	</div>
</div>
