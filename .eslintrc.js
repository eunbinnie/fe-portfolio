module.exports = {
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', 'tailwindcss', 'import'],
  rules: {
    'react/react-in-jsx-scope': 'off', // React 17+에서 더 이상 필요하지 않음
    'react/jsx-uses-react': 'off',
    'react/self-closing-comp': 'error',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-undef': 'off',
    'tailwindcss/classnames-order': 'off',
    'import/no-duplicates': 'error',
  },
  settings: {
    react: {
      version: 'detect', // 현재 설치된 React 버전을 자동으로 감지
    },
  },
};
