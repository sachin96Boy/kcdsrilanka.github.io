<script>
	import { onMount } from 'svelte';
	import CountdownItem from './countdown-item.svelte';

    const date = new Date('2023-09-01T00:00:00.000Z');

    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    const calculateTimeLeft = () => {
        const difference = +date - +new Date();
        if (difference > 0) {
            days = Math.floor(difference / (1000 * 60 * 60 * 24));
            hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            minutes = Math.floor((difference / 1000 / 60) % 60);
            seconds = Math.floor((difference / 1000) % 60);
        } else {
            days = 0;
            hours = 0;
            minutes = 0;
            seconds = 0;
        }
    };

    onMount(() => {
        const timer = setInterval(() => {
            calculateTimeLeft();
        }, 1000);
        return () => clearInterval(timer);
    });

</script>

<div class="flex flex-row justify-center pb-24 p-content ">
	<div class="w-full max-w-7xl sm:px-12 flex justify-between items-center text-center font-bold">
		<CountdownItem value={days} label="Days" />
		<CountdownItem value={hours} label="Hours" />
		<CountdownItem value={minutes} label="Mins" />
		<CountdownItem value={seconds} label="Secs" />
	</div>
</div>
