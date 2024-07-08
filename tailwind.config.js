/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			backgroundImage: {
				BackgroundImage:
					"url('src/assets/photo-1546453667-8a8d2d07bc20.jpeg')",
			},
		},
	},
	plugins: [],
};
