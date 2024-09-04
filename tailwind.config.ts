import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    screens: {
      sm: '424px',
      md: '768px',
    },
    colors: {
      white: '#fff',
      black: '#121212',
      silver: '#d3d3d3',
    },
    fontFamily: {
      sans: ['Pretendard', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      montserrat: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      aespa: ['Aespa', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
  },
  plugins: [],
};
export default config;
