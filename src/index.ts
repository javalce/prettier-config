import type { Config } from 'prettier';

export default {
  printWidth: 100,
  tabWidth: 2,
  useTabs: false,
  endOfLine: 'lf',
  trailingComma: 'all',
  semi: true,
  singleQuote: true,
  jsxSingleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  plugins: ['prettier-plugin-packagejson'],
} satisfies Config;
