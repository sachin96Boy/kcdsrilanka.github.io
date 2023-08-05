import { browser } from '$app/environment';
import { PUBLIC_FRONTEND_URL } from '$env/static/public';
import { toast } from '$utils';
import { cancelPayment, verifyPayment } from './ticket';

if (browser) {
	window.payhere.onCompleted = function onCompleted() {
		verifyPayment().then((res) => {
			if (res?.data && res.data?.paymentStatus === 'success') {
				toast.success('Payment successful');
			} else {
				toast.error('Payment failed');
			}
		});
	};

	window.payhere.onDismissed = function onDismissed() {
		cancelPayment();
	};

	window.payhere.onError = function onError(error) {
		console.log('Payment Error', error);
	};
}

export const processPayment = (user, data) => {
	window.payhere.startPayment({
		sandbox: !data.isProduction,
		merchant_id: data.merchantId,
		return_url: PUBLIC_FRONTEND_URL,
		cancel_url: PUBLIC_FRONTEND_URL,
		notify_url: PUBLIC_FRONTEND_URL,
		order_id: data.reference,
		items: 'KCDSL Ticket',
		amount: data.cost.toFixed(2),
		currency: 'LKR',
		hash: data.hash,
		first_name: user.name?.includes(' ') ? user.name.split(' ')[0] : user.name,
		last_name: user.name?.includes(' ') ? user.name.split(' ')[1] : 'N/A',
		email: user.email,
		phone: user.mobile,
		address: 'AC19, Colombo 01000',
		city: 'Colombo',
		country: 'Sri Lanka'
	});
};
