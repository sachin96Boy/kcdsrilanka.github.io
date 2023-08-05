import { modalStore } from '@skeletonlabs/skeleton';

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
