import { goto as navigate } from '$app/navigation';
import { base } from '$app/paths';

export * from './modal';
export * from './toast';

export const goto = (path, ...params) => {
	navigate(`${base}${path}`, ...params);
};
