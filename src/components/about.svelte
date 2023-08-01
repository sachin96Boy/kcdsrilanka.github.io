<script>
	import { KCD, KCDLarge } from '$icons';
	import { Heading, BodyText } from '$components/common';
</script>

<div class="flex flex-col items-center py-24 section-container ">
	<div class="flex flex-col xl:flex-row gap-y-12 gap-x-24 text-center xl:text-start">
		<div class="flex-1 flex flex-col gap-10 p-section-inner">
			<Heading>About KCD Sri Lanka</Heading>
			<div class="w-full shrink-0 flex justify-center xl:justify-start items-start gap-x-4">
				<KCDLarge class="w-[48px] h-[48px]" color />
				<KCD class="h-[48px] w-[198px]" color />
			</div>
		</div>
		<div
			class="flex-1 flex flex-col p-section-inner gap-6"
		>
			<BodyText>
				Kubernetes Community Days Sri Lanka (KCD Sri Lanka) 2023 is a community-organized event,
				with the support of the Cloud Native Computing Foundation (CNCF), aimed at fostering the
				growth and sustainability of the Kubernetes and cloud-native community. This remarkable
				gathering brings together adopters and technologists from open source and cloud-native
				communities, providing valuable opportunities for education, collaboration, and networking.
			</BodyText>
			<BodyText>
				Sri Lanka comprises a growing group of Cloud Native enthusiasts, students, professionals,
				and technology leaders. KCD Sri Lanka serves as a platform for this community to come
				together, connecting with other tech communities in India and neighboring countries.
				Attendees are presented with the unique chance to experience conferences like KubeCon /
				CloudNativeCon alongside the rich cultural heritage of Sri Lanka.
			</BodyText>
		</div>
	</div>
</div>
