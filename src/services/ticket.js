import { default as toast } from 'svelte-french-toast';
import axios from './base';
import { processPayment } from './payhere';

export const initiatePayment = (registeredUser, v = 'v1') => {
	if (!registeredUser) {
		return toast.error('Please login to continue');
	}
	return axios
		.post(`/${v}/tickets/payments/initiate`)
		.then((res) => processPayment(registeredUser, res.data));
};

export const verifyPayment = (v = 'v1') => axios.get(`/${v}/tickets/payments/verify`);

export const cancelPayment = (v = 'v1') => axios.patch(`/${v}/tickets/payments/cancel`);

export const getTicket = (v = 'v1') => axios.get(`/${v}/tickets/current`);

export const transferTicket = (email, v = 'v1') => axios.patch(`/${v}/tickets/transfer`, { email });
