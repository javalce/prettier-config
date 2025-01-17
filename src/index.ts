import { type Config } from "prettier";

export function defineConfig(config?: Config): Config {
  const { plugins = [], overrides = [], ...customConfig } = config ?? {};

  return {
    printWidth: 100,
    tabWidth: 2,
    useTabs: false,
    endOfLine: "lf",
    trailingComma: "all",
    semi: true,
    singleQuote: true,
    jsxSingleQuote: true,
    bracketSpacing: true,
    arrowParens: "always",
    ...customConfig,
    plugins: ["prettier-plugin-packagejson", ...plugins],
    overrides,
  };
}
