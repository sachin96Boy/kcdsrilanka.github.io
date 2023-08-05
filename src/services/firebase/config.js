import { browser } from '$app/environment';
import { getRemoteConfig } from 'firebase/remote-config';

export let remoteConfig;

export default (app) => {
	if (browser) {
		remoteConfig = getRemoteConfig(app);

		remoteConfig.settings.minimumFetchIntervalMillis = 300 * 1000;
	}
};
