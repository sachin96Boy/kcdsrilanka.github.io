<script>
	import { Button, Heading } from '$components/common';
	import { Clock, Ticket } from '$icons';
</script>

<div class="h-full w-full gradient-background-dark relative z-[0]">
	<div class="section-container flex flex-col xl:flex-row p-20 gap-y-12 gap-x-24">
		<div class="flex-1 flex flex-col bg-black/20 border border-white/10 p-10 gap-6">
			<Heading>Book your ticket now</Heading>
			<div class="w-full md:w-auto badge">
				<Clock class="clock mr-1" />
				9th September 2023
			</div>
			<div class="w-full md:w-auto badge">
				<Clock class="clock mr-1" />
				Trace Expert City, Colombo
			</div>
			<div class="w-full md:w-auto badge">
				<Clock class="clock mr-1" />
				12:00PM Onwards
			</div>
		</div>
		<div class="flex-1 flex flex-col md:flex-row bg-black/20 border border-white/10 p-10 gap-y-12 gap-x-24">
			<div class="h-full flex-1 flex flex-col justify-between items-center xl:items-start">
				<div class="flex flex-col items-center xl:items-start gap-4">
					<span class="font-bold text-[32px] line-through">2000</span>
					<div>
						<Heading class="text-purple">1500</Heading>
                        <span class="ml-2 font-bold text-purple text-base">LKR</span>
					</div>
					<div class="badge px-5 py-1.5 text-base">Pre sale</div>
				</div>
				<Button variant="secondary" class="mt-12">Buy Now</Button>
			</div>
            <div class="flex-1 flex justify-center items-center">
                <Ticket/>
            </div>
		</div>
	</div>
</div>
