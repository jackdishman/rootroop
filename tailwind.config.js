/** @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				rooRed: `#dc3545`,
				rooBlack: `#13171A`,
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
