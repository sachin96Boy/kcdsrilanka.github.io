<script>
	import { getContext } from 'svelte';
	import { Button, Heading } from '$components/common';
	import { Clock, Ticket } from '$icons';
	import { initiatePayment } from '$services';

	const ticketDetails = getContext('ticket');
	const registeredUser = getContext('user');
	const config = getContext('config');

	const discountPeriodExpired = Date.now() >= new Date($config?.EARLY_BIRD_DISCOUNT_PERIOD_END_DATE).getTime();
</script>

<div id="book-tickets" class="h-full w-full gradient-background-dark relative z-[0]">
	<div class="section-container flex flex-col xl:flex-row p-20 gap-y-12 gap-x-24">
		<div class="flex-1 flex flex-col justify-between bg-black/20 border border-white/10 p-10 gap-6">
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
		<div
			class="flex-1 flex flex-col md:flex-row bg-black/20 border border-white/10 p-10 gap-y-12 xl:gap-x-12 2xl:gap-x-24"
		>
			<div class="h-full flex-1 flex flex-col justify-between items-center xl:items-start">
				{#if discountPeriodExpired}
					<div class="flex flex-col items-center xl:items-start gap-4">
						<span class="font-bold text-[32px] line-through">1500</span>
						<div>
							<Heading class="text-purple">2000</Heading>
							<span class="ml-2 font-bold text-purple text-base">LKR</span>
						</div>
						<div class="badge px-5 py-1.5 text-base">Pre sale discounts over</div>
					</div>
				{:else}
					<div class="flex flex-col items-center xl:items-start gap-4">
						<span class="font-bold text-[32px] line-through">2000</span>
						<div>
							<Heading class="text-purple">1500</Heading>
							<span class="ml-2 font-bold text-purple text-base">LKR</span>
						</div>
						<div class="badge px-5 py-1.5 text-base">Pre sale</div>
					</div>
				{/if}
				{#if $ticketDetails?.data?.paymentStatus !== 'success'}
					<Button
						variant="secondary"
						class="mt-12"
						onClick={() => initiatePayment($registeredUser?.data)}>Buy Now</Button
					>
				{:else}
					<Button variant="secondary" class="mt-12 pointer-events-none" disabled="true"
						>Already Purchased</Button
					>
				{/if}
			</div>
			<div class="flex-1 flex justify-center items-center">
				<Ticket />
			</div>
		</div>
	</div>
</div>
