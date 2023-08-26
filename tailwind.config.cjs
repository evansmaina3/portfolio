/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily :{
				'Display': ['SansDisplay', 'sans-serif'],
				'Mono': ['SansMono', 'sans-serif'],
				'Open': ['OpenSans', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
