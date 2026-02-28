import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cake-themed color palette - Soft, elegant, premium
        cake: {
          primary: '#E8B4B8',       // Soft Pink
          primaryDark: '#D49CA3',   // Darker Pink
          primaryLight: '#F2D0D3',  // Light Pink
          secondary: '#FFF5E1',     // Cream/Ivory
          accent: '#D4AF37',        // Gold
          accentDark: '#B8962E',    // Dark Gold
          accentLight: '#E8C865',   // Light Gold
          dark: '#5D4037',          // Chocolate Brown
          darkLight: '#8B6B5C',     // Light Brown
          darkAlt: '#4A3728',      // Darker Brown (for dark sections)
          darkAltLight: '#6B5344', // Medium Brown (for dark sections)
          light: '#FFFAF0',        // Floral White
          rose: '#F8E8E8',          // Rose tint
          vanilla: '#FFF8DC',       // Vanilla
          chocolate: '#3E2723',    // Dark Chocolate
          roseLight: '#E0ACB0',    // Rose Light (#E0ACB0)
        },
        // Additional brand colors
        brand: {
          pink: '#E8B4B8',
          cream: '#FFF5E1',
          gold: '#D4AF37',
          brown: '#5D4037',
          light: '#FFFAF0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out infinite 2s',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'slide-up': 'slide-up 0.6s ease-out',
        'slide-down': 'slide-down 0.6s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.6s ease-out',
        'rotate': 'rotate 10s linear infinite',
        'shimmer': 'shimmer 1.5s ease-in-out infinite',
        'scroll-indicator': 'scroll-indicator 1.5s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 3s ease infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { 
            opacity: '1',
            boxShadow: '0 0 5px rgba(232, 180, 184, 0.5)'
          },
          '50%': { 
            opacity: '0.85',
            boxShadow: '0 0 25px rgba(232, 180, 184, 0.8)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '25%': { transform: 'translateY(-15px) rotate(2deg)' },
          '50%': { transform: 'translateY(0px) rotate(0deg)' },
          '75%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        'slide-up': {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'slide-down': {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        'rotate': {
          'from': { transform: 'rotate(0deg)' },
          'to': { transform: 'rotate(360deg)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'scroll-indicator': {
          '0%, 100%': { transform: 'translateY(0)', opacity: '1' },
          '100%': { transform: 'translateY(10px)', opacity: '0' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      backgroundImage: {
        'gradient-cake': 'linear-gradient(135deg, #E8B4B8 0%, #D49CA3 50%, #D4AF37 100%)',
        'gradient-hero': 'linear-gradient(135deg, #FFFAF0 0%, #FFF5E1 50%, #F8E8E8 100%)',
        'gradient-card': 'linear-gradient(180deg, #FFFFFF 0%, #FFFAF0 100%)',
        'gradient-text': 'linear-gradient(90deg, #E8B4B8, #D4AF37)',
        'gradient-radial': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'cake': '0 10px 40px -10px rgba(232, 180, 184, 0.4)',
        'cake-lg': '0 20px 60px -15px rgba(232, 180, 184, 0.5)',
        'gold': '0 10px 40px -10px rgba(212, 175, 55, 0.4)',
        'card': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 10px 40px rgba(0, 0, 0, 0.12)',
        'accent': '0 10px 40px -10px rgba(212, 175, 55, 0.3)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem',
        '3xl': '1.5rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}

export default config
