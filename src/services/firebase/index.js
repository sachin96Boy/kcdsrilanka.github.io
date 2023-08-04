import { browser } from '$app/environment';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getRemoteConfig, getValue, fetchAndActivate } from 'firebase/remote-config';
import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';

const app = initializeApp(
	JSON.parse(
		browser
			? window.atob(PUBLIC_FIREBASE_CONFIG)
			: Buffer.from(PUBLIC_FIREBASE_CONFIG, 'base64').toString()
	)
);

export const auth = getAuth(app);

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

export const googleAuthProvider = new GoogleAuthProvider();

export const githubAuthProvider = new GithubAuthProvider();
