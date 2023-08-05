import { browser } from '$app/environment';
import { remoteConfig } from '$services';
import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { setContext } from 'svelte';
import { writable } from 'svelte/store';

export const user = writable();
export const ticket = writable();
export const loader = writable();
export const config = writable();

user.set({
	data: null,
	fetched: false
});

ticket.set({
	data: null,
	fetched: false
});

loader.set({
	show: false,
	text: ''
});

const initialConfig = {
	REGISTRATION_ENABLED: true,
	EARLY_BIRD_DISCOUNT_PERIOD_END_DATE: '2023-09-01T01:00:00.000Z'
};

config.set(initialConfig);

export const initStore = () => {
	setContext('user', user);
	setContext('ticket', ticket);
	setContext('loader', loader);
	setContext('config', config);
	if (browser) {
		fetchAndActivate(remoteConfig).then(() => {
			config.set(
				Object.keys(initialConfig).reduce((config, key) => {
					const value = getValue(remoteConfig, key);
					const defaultValue = config[key];
					if (typeof defaultValue === 'string') config[key] = value.asString();
					else if (typeof defaultValue === 'number') config[key] = value.asNumber();
					else config[key] = value.asBoolean();
					return config;
				}, {})
			);
		});
	}
};
