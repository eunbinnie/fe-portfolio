module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['tailwindcss'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-undef': 'off',
    'tailwindcss/classnames-order': 'off',
  },
};
