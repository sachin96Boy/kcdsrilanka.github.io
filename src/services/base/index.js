import axios from 'axios';
import { default as toast } from 'svelte-french-toast';
import { PUBLIC_SERVER_URL } from '$env/static/public';
import { auth } from '$services';

const instance = axios.create({
	baseURL: PUBLIC_SERVER_URL,
	headers: {
		'Content-Type': 'application/json'
	}
});

instance.interceptors.request.use(async (config) => {
	const result = await auth.currentUser?.getIdTokenResult(true);
	if (result) {
		config.headers['authorization'] = `Bearer ${result.token}`;
		config.headers['x-user-email'] = auth.currentUser.email;
	}
	return config;
});

instance.interceptors.response.use(
	(response) => response?.data,
	(error) => {
		if (error.config?.silent) return null;
		if (error.response) {
			toast.error(error.response.data.message);
		}
		return null;
	}
);

export default instance;
