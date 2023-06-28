module.exports = {
  "extends": [
    'plugin:@typescript-eslint/recommended',
    "next/core-web-vitals",
    'eslint:recommended',
    'plugin:prettier/recommended',
    "./node_modules/ts-standard/eslintrc.json",
    'eslint-config-prettier'
  ],
  "plugins": ['@typescript-eslint/eslint-plugin', "eslint-plugin-prettier", "prettier"],
  "parser": "@typescript-eslint/parser",
  "root": false,
  "parserOptions": {
    "project": "./tsconfig.json",
    tsconfigRootDir: __dirname,
    "sourceType": "module"
  },
  "rules": {
    "prettier/prettier": "warn",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-floating-promises": "off"
  },
  "ignorePatterns": [".eslintrc.js"]
}
