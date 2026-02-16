/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			// Custom breakpoints for better chatbot responsiveness
			screens: {
				'xs': '480px',
				// sm: '640px', (default)
				// md: '768px', (default)
				// lg: '1024px', (default)
				// xl: '1280px', (default)
				'2xl': '1536px',
				'3xl': '1920px',
			},
			// Custom spacing for widget positioning
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
				'128': '32rem',
			},
			// Widget-specific z-index layers
			zIndex: {
				'60': '60',
				'70': '70',
			},
			// Smooth animations for widget interactions
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
			},
			// Custom box shadows for the widget
			boxShadow: {
				'widget': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
				'widget-hover': '0 35px 60px -12px rgba(0, 0, 0, 0.3)',
			}
		},
	},
	plugins: [],
};