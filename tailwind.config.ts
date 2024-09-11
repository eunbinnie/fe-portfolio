import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '424px',
      md: '768px',
    },
    colors: {
      white: '#fff',
      black: '#121212',
      silver: '#d3d3d3',
      gray: '#ddd',
    },
    fontFamily: {
      sans: ['Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      aespa: ['Aespa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    animation: {
      'infinite-slide-original': 'infinite-slide-original 70s linear infinite',
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
  },
  plugins: [],
};
export default config;
