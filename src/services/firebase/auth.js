import { browser } from '$app/environment';
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';
import { getCurrentUser } from '$services/auth';
import { getTicket } from '$services/ticket';
import { ticket, user } from '$store';

export let auth;

export const googleAuthProvider = new GoogleAuthProvider();

export const githubAuthProvider = new GithubAuthProvider();

export default (app) => {
	auth = getAuth(app);
	if (browser) {
		auth.onAuthStateChanged(async function (firebaseUser) {
			if (firebaseUser != null) {
				const [userResult, ticketResult] = await Promise.all([getCurrentUser(), getTicket()]);
				if (userResult) user.set({ data: userResult.data, fetched: true });
				if (ticketResult) ticket.set({ data: ticketResult.data, fetched: true });
			} else {
				setTimeout(() => {
					user.set({ data: null, fetched: true });
					ticket.set({ data: null, fetched: true });
				}, 1000);
			}
		});
	}
};
