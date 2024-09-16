import type { Config } from 'tailwindcss';

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
        sans: ['Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        aespa: ['Aespa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        wiro: ['Wiro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'infinite-slide-original':
          'infinite-slide-original 70s linear infinite',
        'infinite-slide-copy': 'infinite-slide-copy 70s linear infinite',
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
