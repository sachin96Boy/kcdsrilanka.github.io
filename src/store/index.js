import { setContext } from 'svelte';
import { writable } from 'svelte/store';

export const userContext = writable();

export const initStore = () => {
	setContext('user', userContext);
};
