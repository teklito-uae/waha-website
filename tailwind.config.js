/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ['class'],
	content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
	theme: {
		extend: {
			colors: {
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
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
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',

				/* ── Olive Green family ─────────────── */
				pine: '#556B2F',
				'olive-dark': '#3D4F22',
				'olive-deep': '#2A3717',
				'olive-mid': '#6B8A3A',
				'olive-light': '#8FAF59',
				'olive-mist': '#C8D9A8',

				/* ── Warm Beige family ──────────────── */
				'lime-cream': '#F5F5DC',
				beige: '#FAFAEF',
				'beige-warm': '#FDFDF5',
				'beige-deep': '#E8E4CC',
				'beige-stone': '#D4CFA8',

				/* ── Gold accent ────────────────────── */
				gold: '#C9A227',
				'gold-light': '#E8C84A',
				'gold-muted': '#A07E1A',

				/* ── Legacy aliases ─────────────────── */
				sage: '#6B8A3A',
				'pale-green': '#8FAF59',
				'accent-light': '#E8E4CC',
			},
			fontFamily: {
				/* Display serif — Cormorant Garamond */
				sora: ['Cormorant Garamond', 'Georgia', 'serif'],
				/* Body / UI — Host Grotesk */
				inter: ['Host Grotesk', 'system-ui', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'fade-in': 'fadeIn 0.6s ease forwards',
				'slide-up': 'slideUp 0.6s ease forwards',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
			},
			keyframes: {
				fadeIn: {
					from: { opacity: '0' },
					to: { opacity: '1' }
				},
				slideUp: {
					from: { opacity: '0', transform: 'translateY(20px)' },
					to: { opacity: '1', transform: 'translateY(0)' }
				},
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				}
			},
			transitionDuration: {
				'400': '400ms',
			}
		}
	},
	plugins: [],
}
