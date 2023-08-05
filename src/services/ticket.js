import { loader } from '$store';
import { toast } from '$utils';
import { default as axios } from './base';
import { processPayment } from './payhere';

export const initiatePayment = (registeredUser, v = 'v1') => {
	if (!registeredUser) {
		return toast.error('Please login to continue');
	}
	loader.set({ show: true });
	return axios
		.post(`/${v}/tickets/payments/initiate`)
		.then((res) => processPayment(registeredUser, res.data));
};

export const verifyPayment = (v = 'v1') => axios.get(`/${v}/tickets/payments/verify`);

export const cancelPayment = (v = 'v1') => axios.patch(`/${v}/tickets/payments/cancel`);

export const getTicket = (silent = true, v = 'v1') =>
	axios.get(`/${v}/tickets/current`, {
		silent
	});

export const transferTicket = (email, v = 'v1') => axios.patch(`/${v}/tickets/transfer`, { email });
