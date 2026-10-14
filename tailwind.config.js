/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        void: {
          DEFAULT: '#08090E',
          deep: '#0D1117',
          surface: '#121622',
          card: 'rgba(18, 24, 38, 0.65)',
          border: 'rgba(255, 255, 255, 0.08)',
        },
        cyan: {
          electric: '#00F2FE',
          dim: 'rgba(0, 242, 254, 0.15)',
          glow: 'rgba(0, 242, 254, 0.35)',
        },
        violet: {
          neon: '#9D4EDD',
          dim: 'rgba(157, 78, 221, 0.15)',
          glow: 'rgba(157, 78, 221, 0.35)',
        },
        cosmic: {
          slate: '#8B949E',
          star: '#E6EDF3',
          emerald: '#10B981',
        },
        warm: {
          bg: '#EAE6DC',
          alt: '#F5F2EC',
          card: '#FFFFFF',
          navy: '#0F1624',
          navyLight: '#1E2A3A',
          navyDark: '#090E17',
          amber: '#C9973E',
          amberLight: '#E8B96A',
          slate: '#5A6475',
          muted: '#8A94A0',
          border: '#E0DAD0',
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'float': 'float 5s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'float-reverse': 'float-reverse 6.5s ease-in-out infinite',
        'float-fast': 'float 3.5s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'beacon': 'beacon 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(0.8deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-18px) rotate(-1deg)' },
        },
        'float-reverse': {
          '0%, 100%': { transform: 'translateY(-10px) rotate(-0.5deg)' },
          '50%': { transform: 'translateY(8px) rotate(0.8deg)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        beacon: {
          '0%': { transform: 'scale(0.95)', opacity: '0.8' },
          '70%': { transform: 'scale(1.8)', opacity: '0' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
        'cyan-glow': '0 0 25px -5px rgba(0, 242, 254, 0.4)',
        'violet-glow': '0 0 25px -5px rgba(157, 78, 221, 0.4)',
        'dual-glow': '0 0 35px -5px rgba(0, 242, 254, 0.25), 0 0 45px -5px rgba(157, 78, 221, 0.25)',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
