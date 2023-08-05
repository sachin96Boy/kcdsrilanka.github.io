/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')
	],
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
				'xs': '450px',
				'xl-high': '1440px'
			}
		}
	},
	plugins: [
		require('tailwindcss-animate'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
