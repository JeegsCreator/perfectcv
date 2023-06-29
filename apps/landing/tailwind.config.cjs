/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			white: '#fff',
			black: '#000',
			primary: '#5142FF',
			gray: '#F2F2F2',
			border: '#BFBFBF',
			text: {
				opac: '#858585'
			}
		},
		extend: {},
	},
	plugins: [
		function ({ addComponents, theme }) {
			addComponents({
				'.clippath': {
					'clip-path': 'polygon(0 20%, 100% 0, 100% 100%, 0 100%)'
				},
				'.stilizedborder': {
					'box-shadow': `
					0 2px 0 2px ${theme('colors.white')}, 
					0 8px 0 8px ${theme('colors.primary')},
					0 10px 0 10px ${theme('colors.white')}, 
					0 14px 0 14px ${theme('colors.primary')},
					0 16px 0 16px ${theme('colors.white')}, 
					0 17px 0 17px ${theme('colors.primary')}
					`
				},
				'.bg-pattern': {
					'background-image': 'url("/background-pattern.webp")'
				},
				'.text-separator': {
					'text-shadow': `
					2px 2px 0 ${theme('colors.primary')}, 
					-2px -2px 0 ${theme('colors.primary')},
					-2px 2px 0 ${theme('colors.primary')},
					2px -2px 0 ${theme('colors.primary')}`,
					'color': '#fff'
				}
			})
		}
	],
}
