import { base } from '$app/paths';

export * from './modal';
export * from './toast';

export const goto = (path) => {
	window.location.href = `${base}${path}`;
};
