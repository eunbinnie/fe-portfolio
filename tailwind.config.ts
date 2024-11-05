import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '425px',
        md: '769px',
        lg: '1025px',
      },
      colors: {
        white: '#fff',
        black: '#121212',
        silver: '#d3d3d3',
        gray: {
          50: '#fafafa',
          100: '#cbc9cf',
          150: '#383838',
          200: '#2a2a2b',
          300: '#1e1e1f',
          400: '#1b1c20',
        },
      },
      fontFamily: {
        sans: ['var(--font-pretendard)', ...defaultTheme.fontFamily.sans],
        aespa: ['var(--font-aespa)', ...defaultTheme.fontFamily.sans],
        wiro: ['var(--font-wiro)', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'infinite-slide-original':
          'infinite-slide-original 70s linear infinite',
        'infinite-slide-copy': 'infinite-slide-copy 70s linear infinite',
        'fade-in': 'fade-in 1s ease-in-out',
        'fade-out': 'fade-out 1s ease-in-out',
      },
      keyframes: {
        'infinite-slide-original': {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-100%)' },
          '50.01%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'infinite-slide-copy': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-200%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-out': {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      boxShadow: {
        small:
          'rgba(255, 255, 255, 0.2) 0px 3px 5px -1px, rgba(255, 255, 255, 0.14) 0px 6px 10px 0px, rgba(255, 255, 255, 0.12) 0px 1px 18px 0px',
      },
      backgroundImage: {
        'left-top-gradient':
          'linear-gradient( to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50% )',
        'white-silver-gradient':
          'linear-gradient(to right, #c0c0c0, #ffffff, #c0c0c0, #d3d3d3)',
      },
    },
  },
  plugins: [],
};
export default config;
