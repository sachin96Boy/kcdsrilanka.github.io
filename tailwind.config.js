/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'purple': 'var(--purple)',
				'dark-gray': 'var(--dark-gray)'
			},
			maxWidth: {
				body: '1920px'
			},
			fontFamily: {
				ubuntu: ['Ubuntu', 'sans'],
				inter: ['Inter', 'sans']
			},
			transitionDuration: {
				medium: '300ms',
				long: '500ms'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};
