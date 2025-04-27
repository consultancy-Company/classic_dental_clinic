import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				ca_pattern: 'url("/images/gggrain.svg")'
			},
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: '#407C82',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: '#1E6091',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				},
				classic_yellow: '#dd9639',
				classic_blue: '#104B82',
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				'primary-button-bg': '#407C82', /* Teal */
				'primary-button-hover-bg': '#366A70', /* Darker Teal */
				'secondary-button-bg': '#1E6091', /* Navy Blue */
				'secondary-button-hover-bg': '#164A71', /* Darker Blue */
				'outline-button-border': '#407C82', /* Teal Border */
				'disabled-button-bg': '#BFD5D9', /* Faded Teal */
				'button-text-color': '#FFFFFF', /* White Text */

				'category-1': '#407C82', /* Teal */
				'category-2': '#1E6091', /* Navy Blue */
				'category-3': '#89C2D9', /* Sky Blue */
				'category-4': '#FFC857', /* Golden Yellow */
				'category-5': '#E09F3E', /* Warm Orange */
				'category-6': '#D72638', /* Red */

				'background-color': '#F0F8FF', /* Alice Blue */
				'card-bg-color': '#E3F2FD', /* Light Powder Blue */
				'primary-text-color': '#1B1B1B', /* Deep Charcoal */
				'secondary-text-color': '#5A7184', /* Muted Blue-Gray */
				'sidebar-background': '#BFD5D9',
				'sidebar-foreground': '240 5.3% 26.1%',
				'sidebar-border': '220 13% 91%',

				// Chart Colors
				'chart-1': 'hsl(221.2, 83.2%, 53.3%)',
				'chart-2': 'hsl(212, 95%, 68%)',
				'chart-3': 'hsl(216, 92%, 60%)',
				'chart-4': 'hsl(210, 98%, 78%)',
				'chart-5': 'hsl(212, 97%, 87%)',
			},
			fontFamily: {
				heading: [
					'Times New Roman',
					'serif'
				],
				subheading: [
					'Red Hat Text',
					'sans-serif'
				],
				body: [
					'Lato',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-require-imports
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
