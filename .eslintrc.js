module.exports = {
  extends: [
    "next/core-web-vitals",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto" }],
  },
};
