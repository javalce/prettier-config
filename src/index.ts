import type { Config } from 'prettier';

// @ts-expect-error – no types available
import prettierPluginPackagejson from 'prettier-plugin-packagejson';

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
  plugins: [prettierPluginPackagejson],
} satisfies Config;
