import { browser } from '$app/environment';
import { getRemoteConfig, getValue, fetchAndActivate } from 'firebase/remote-config';

export default (app) => {
	if (browser) {
		const initialConfig = {
			registrationEnabled: false
		};

		const remoteConfig = getRemoteConfig(app);

		remoteConfig.settings.minimumFetchIntervalMillis = 300 * 1000;

		fetchAndActivate(remoteConfig).then(() => {
			sessionStorage.setItem(
				'remoteConfig',
				JSON.stringify(
					Object.keys(initialConfig).reduce((config, key) => {
						const value = getValue(remoteConfig, key);
						const defaultValue = initialConfig[key];
						if (typeof defaultValue === 'string') config[key] = value.asString();
						else if (typeof defaultValue === 'number') config[key] = value.asNumber();
						else config[key] = value.asBoolean();
						return config;
					}, {})
				)
			);
		});
	}
};
