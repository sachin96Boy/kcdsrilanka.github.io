import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, googleAuthProvider } from '$services';
import { omitBy, isEmpty } from 'lodash';
import { user } from '$store';
import { default as axios } from './base';
import { goto } from '$utils';

export const initiateGoogleLogin = async () => {
	await signInWithPopup(auth, googleAuthProvider);
	const res = await getCurrentUser();
	if (!res?.data) {
		goto(`/register`);
	} else {
		user.set({
			data: res.data,
			fetched: true
		});
	}
};

export const register = async (payload, v = 'v1') => {
	payload.token = (await auth.currentUser?.getIdTokenResult(true))?.token;
	payload.picture = auth.currentUser.photoURL;
	if (payload.gender === 'null') delete payload.gender;
	return axios.post(
		`/${v}/auth/register`,
		omitBy(payload, (value) => isEmpty(value))
	);
};

export const getCurrentUser = (silent = true, v = 'v1') =>
	axios.get(`/${v}/auth/current`, {
		silent
	});

export const logout = () => {
	return signOut(auth).then(() => {
		user.set({
			data: null,
			fetched: false
		});
	});
};
