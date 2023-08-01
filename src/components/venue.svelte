<script>
	import { browser } from '$app/environment';
	import Marquee from 'svelte-fast-marquee';
	import venue from '$assets/images/venue.png';
	import { Calendar, Clock, Location } from '$icons';

	const speed = 5 + 35 * (browser ? window.innerWidth / 1920 : 1);

	const iconStyles =
		'h-[44px] w-[44px] sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] xl:h-[70px] xl:w-[71px]';
</script>

<div class="w-full h-full relative overflow-hidden">
	<img alt="venue" src={venue} class="min-h-[500px] object-cover" />
    <div class="pointer-events-none mt-44">
        <div class="absolute bottom-0 w-[120vw] overflow-hidden rotate-[5deg] -translate-x-5 mb-40">
            <Marquee direction="left" class="w-full h-full min-h-[70px] md:min-h-[100px] bg-white py-4" {speed}>
                {#each [1, 2, 3, 4] as _}
                    <span class="mr-20 text-black font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">Registration Opening Soon</span>
                {/each}
            </Marquee>
        </div>
        <div class="absolute bottom-0 w-[120vw] overflow-hidden -rotate-[5deg] -translate-x-5 mb-40">
            <Marquee direction="right" class="w-full h-full min-h-[70px] md:min-h-[100px] bg-purple py-4" {speed}>
                {#each [1, 2] as _}
                    <div
                        class="w-full flex justify-center items-center gap-x-14 mr-14 text-white font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl"
                    >
                        <div class="flex items-center gap-4">
                            <Calendar class={iconStyles} />
                            <span>9th September</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <Location class={iconStyles} />
                            <span>Trace Expert City</span>
                        </div>
                        <div class="flex items-center gap-4">
                            <Clock class={iconStyles} />
                            <span>12:00PM</span>
                        </div>
                    </div>
                {/each}
            </Marquee>
        </div>
    </div>
</div>
