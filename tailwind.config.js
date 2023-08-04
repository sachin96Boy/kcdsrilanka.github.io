/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				'purple': 'var(--purple)',
				'dark-gray': 'var(--dark-gray)',
				'badge': 'var(--badge)',
				'card': 'var(--card)'
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
			},
			screens: {
				xs: '450px'
			}
		}
	},
	plugins: [require('tailwindcss-animate')]
};
