import { setContext } from 'svelte';
import { writable } from 'svelte/store';

export const user = writable();
export const ticket = writable();
export const loader = writable(false);

user.set({
	data: null,
	fetched: false
});

ticket.set({
	data: null,
	fetched: false
});

loader.set(false);

export const initStore = () => {
	setContext('user', user);
	setContext('ticket', ticket);
	setContext('loader', loader);
};
