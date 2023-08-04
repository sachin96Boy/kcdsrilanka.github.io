import axios from './base';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '$services';
import { omitBy, isEmpty } from 'lodash';
import { userContext } from '$store';

export const initiateGoogleLogin = async () => {
	await signInWithPopup(auth, googleAuthProvider);
	const res = await getCurrentUser();
	if (!res?.data) {
		window.location.href = '/register';
	}
};

export const register = async (payload, v = 'v1') => {
	payload.token = (await auth.currentUser?.getIdTokenResult(true))?.token;
	payload.picture = auth.currentUser.photoURL;
	if (payload.gender === 'null') delete payload.gender;
	return axios
		.post(
			`/${v}/auth/register`,
			omitBy(payload, (value) => isEmpty(value))
		)
		.then(() => (window.location.href = '/'));
};

export const getCurrentUser = (silent = true, v = 'v1') =>
	axios.get(`/${v}/auth/current`, {
		silent
	});

export const logout = () => {
	return signOut(auth).then(() => {
		userContext.set(null);
	});
};
