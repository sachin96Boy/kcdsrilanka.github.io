import { toastStore } from '@skeletonlabs/skeleton';

export const toast = {
	success: (message) => {
		toastStore.trigger({
			message,
			background: 'bg-green-500/80 backdrop-blur-sm'
		});
	},
	error: (message) => {
		toastStore.trigger({
			message,
			background: 'bg-red-500/80 backdrop-blur-sm'
		});
	}
};
