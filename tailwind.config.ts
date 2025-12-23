import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			animation: {
				meteor: 'meteor 5s linear infinite'
			},
			keyframes: {
				meteor: {
					'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
					'70%': { opacity: '1' },
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				}
			},
			rotate: {
				215: '215deg'
			},
			width: {
				'12.5': '3.125rem',
				'0.5': '0.125rem',
				'1': '0.25rem'
			},
			height: {
				'0.5': '0.125rem',
				'1': '0.25rem'
			},
			size: {
				'0.5': '0.125rem',
				'1': '0.25rem'
			}
		}
	},
	plugins: []
} satisfies Config;