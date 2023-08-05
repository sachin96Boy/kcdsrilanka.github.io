import { browser } from '$app/environment';
import { initializeApp } from 'firebase/app';
import { PUBLIC_FIREBASE_CONFIG } from '$env/static/public';

import auth from './auth';
import config from './config';

export * from './auth';
export * from './config';

const app = initializeApp(
	JSON.parse(
		browser
			? window.atob(PUBLIC_FIREBASE_CONFIG)
			: Buffer.from(PUBLIC_FIREBASE_CONFIG, 'base64').toString()
	)
);

auth(app);
config(app);
