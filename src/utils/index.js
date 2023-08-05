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
	show: (title, body, btnText, onClose) => {
		modalStore.trigger({
			type: 'confirm',
			title: title,
			body: body,
			buttonTextConfirm: btnText,
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
