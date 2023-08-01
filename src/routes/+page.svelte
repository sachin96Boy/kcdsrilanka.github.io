<script>
	import {
		About,
		Hero,
		SponsorMarquee,
		Countdown,
		Venue,
		Speakers,
		Agenda,
		BookTickets,
		Organizers,
		Sponsors,
		FAQ
	} from '$components';
</script>

<svelte:head>
	<title>KCD | 2023</title>
	<meta name="description" content="Kubernetes Community Days Sri Lanka 2023" />
</svelte:head>

<section>
	<Hero />
	<SponsorMarquee />
	<div class="relative">
		<About />
		<Countdown />
		<Venue />
		<Speakers />
		<Agenda />
		<BookTickets />
		<Sponsors />
		<FAQ />
		<Organizers />
		<div
			class="absolute h-full left-1/2 top-0 w-[1px] bg-white/5 xl:bg-white/10 z-[0] pointer-events-none"
		/>
	</div>
</section>
