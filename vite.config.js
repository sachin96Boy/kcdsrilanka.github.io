import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	base: './',
	resolve: {
		alias: {
			$assets: path.resolve('./src/assets'),
			$components: path.resolve('./src/components'),
			$constants: path.resolve('./src/constants'),
			$icons: path.resolve('./src/icons'),
			$routes: path.resolve('./src/routes'),
			$services: path.resolve('./src/services'),
			$store: path.resolve('./src/store'),
			$styles: path.resolve('./src/styles'),
			$utils: path.resolve('./src/utils')
		}
	}
});
