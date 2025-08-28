import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'finom-h1': ['4.5rem', { lineHeight: '1.05', fontWeight: '800' }],
				'finom-h2': ['3rem', { lineHeight: '1.1', fontWeight: '800' }],
				'finom-h3': ['2rem', { lineHeight: '1.2', fontWeight: '700' }],
				'finom-lead': ['1.375rem', { lineHeight: '1.5', fontWeight: '500' }],
				'finom-body': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
			},
			maxWidth: {
				'content': '1160px',
			},
			spacing: {
				'section': '6rem',
				'section-mobile': '3rem',
			},
			colors: {
				border: 'hsl(var(--border-hsl))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary-hsl))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				
				// Theme-aware semantic tokens
				'theme-bg': 'hsl(var(--bg))',
				'theme-surface': 'hsl(var(--surface))',
				'theme-soft': 'hsl(var(--bg-soft))',
				'theme-text': 'hsl(var(--text))',
				'theme-muted': 'hsl(var(--text-muted))',
				'theme-border': 'hsl(var(--border))',
				'primary-ghost': 'hsl(var(--primary-ghost) / 0.08)',
				'primary-ghost-dark': 'hsl(var(--primary-ghost) / 0.16)',
				success: 'hsl(var(--success))',
				
				// Custom brand colors  
				magenta: {
					50: '#fef2f4',
					100: '#fde6ea', 
					200: '#fbd0d9',
					300: '#f7aab8',
					400: '#f17a92',
					500: 'hsl(var(--primary-hsl))', // #EA3B5F
					600: '#d31e47',
					700: '#b11639',
					800: '#951536',
					900: '#801433',
					DEFAULT: 'hsl(var(--primary-hsl))',
					dark: 'hsl(var(--primary-hsl))',
					light: 'hsl(var(--primary-hsl))'
				},
				
				// Sidebar colors
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			},
			boxShadow: {
				'card': 'var(--shadow-card)',
				'hover': 'var(--shadow-hover)',
				'elegant': 'var(--shadow-elegant)',
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
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'float-slow': {
					'0%, 100%': {
						transform: 'translate(0px, 0px)'
					},
					'33%': {
						transform: 'translate(10px, -15px)'
					},
					'66%': {
						transform: 'translate(-8px, 8px)'
					}
				},
				'float-drift': {
					'0%, 100%': {
						transform: 'translate(0px, 0px) rotate(0deg)'
					},
					'25%': {
						transform: 'translate(-12px, -8px) rotate(90deg)'
					},
					'50%': {
						transform: 'translate(15px, -12px) rotate(180deg)'
					},
					'75%': {
						transform: 'translate(-5px, 10px) rotate(270deg)'
					}
				},
				'glow-pulse': {
					'0%, 100%': {
						opacity: '0.3'
					},
					'50%': {
						opacity: '0.8'
					}
				},
				'glow-breathe': {
					'0%, 100%': {
						opacity: '0.4',
						transform: 'scale(1)'
					},
					'50%': {
						opacity: '0.7',
						transform: 'scale(1.1)'
					}
				},
				'pulse-neon': {
					'0%, 100%': {
						boxShadow: '0 0 5px hsl(var(--neon))'
					},
					'50%': {
						boxShadow: '0 0 20px hsl(var(--neon)), 0 0 30px hsl(var(--neon))'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-50px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'float-drift': 'float-drift 12s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
				'glow-breathe': 'glow-breathe 6s ease-in-out infinite',
				'pulse-neon': 'pulse-neon 2s ease-in-out infinite',
				'slide-in-right': 'slide-in-right 0.5s ease-out',
				'slide-in-left': 'slide-in-left 0.5s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
