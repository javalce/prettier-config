# My Prettier Configuration

This is my personal Prettier configuration.

- [My Prettier Configuration](#my-prettier-configuration)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Extending the shared configuration](#extending-the-shared-configuration)
  - [TypeScript users:](#typescript-users)

## Features

- `printWidth`: 100
- `tabWidth`: 2
- `useTabs`: false
- `endOfLine`: 'lf'
- `trailingComma`: 'all'
- `semi`: true
- `singleQuote`: true
- `jsxSingleQuote`: true
- `bracketSpacing`: true
- `arrowParens`: 'always'
- `plugins`: ['prettier-plugin-packagejson']

The `prettier-plugin-packagejson` plugin is used to sort the keys of a `package.json` file to keep them in a consistent order and make it easier to read.

## Installation

> [!IMPORTANT]
> Prettier is a peer-dependency of this package and should be installed at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

```sh
# If you use npm
npm install --save-dev prettier @javalce/prettier-config

# If you use pnpm
pnpm add --save-dev prettier @javalce/prettier-config

# If you use yarn
yarn add --dev prettier @javalce/prettier-config

# If you use bun
bun add --dev prettier @javalce/prettier-config
```

## Usage

Since version 2.0.0, the configuration is implemented in TypeScript and the package exports both ESM and CommonJS formats.

It is recommended to use a `prettier.config.js` file with ESM syntax, as many tools (like ESLint) are moving from legacy `rc` files to `*.config.js` files for configuration. Example:

```js
import prettierConfig from '@javalce/prettier-config';

export default prettierConfig;
```

You can also use `.prettierrc.js` or CommonJS if you prefer:

```js
const prettierConfig = require('@javalce/prettier-config');
module.exports = prettierConfig;
```

### Extending the shared configuration

If you want to extend the shared config or override some of its properties, you can import and modify the exported object:

```js
import prettierConfig from '@javalce/prettier-config';

export default {
  ...prettierConfig,
  semi: false,
  plugins: [
    ...prettierConfig.plugins,
    // ...your plugins
  ],
};
```

## TypeScript users:

This package provides type definitions for the configuration. You can import the `Config` type from Prettier for full type safety in your custom config:

```js
/** @type {import('prettier').Config} */
export default {
  // ...your config
};
```
