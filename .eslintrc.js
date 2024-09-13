module.exports = {
  extends: [
    'prettier',
    'eslint:recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:tailwindcss/recommended',
  ],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-undef': 'off',
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
  },
};
