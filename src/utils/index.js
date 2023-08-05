import { modalStore, toastStore } from '@skeletonlabs/skeleton';

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

export const modal = {
	show: ({ title, body, actionText, onClose }) => {
		modalStore.trigger({
			type: actionText ? 'confirm' : 'alert',
			title: title,
			body: body,
			buttonTextConfirm: actionText,
			response: () => {
				setTimeout(() => {
					if (onClose) onClose();
				}, 300);
			}
		});
	},
	hide: () => {
		modalStore.close();
	}
};
