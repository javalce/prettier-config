# My Prettier Configuration

This is my personal Prettier configuration.

- [My Prettier Configuration](#my-prettier-configuration)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)

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

The `prettier-plugin-packagejson` plugin is used to sort the keys ofm a `package.json` file to keep them in a consistent order and make it easier to read.

## Installation

> [!IMPORTANT]
> Prettier is a peer-dependency of this package, and should be installed at the root of your project.
>
> See: https://prettier.io/docs/en/install.html

```sh
# If you use npm
npm install --save-dev prettier @javalce/prettier-config

# If you use pnpm
pnpm add --save-dev prettier @javalce/prettier-config

# If you use yarn
yarn add --dev prettier @javalce/prettier-config
```

## Usage

To use this config, set the following in `package.json`.

```json
{
  "prettier": "@javalce/prettier-config"
}
```

or create a `.prettierrc.cjs` file with the following content:

```js
const prettierConfig = require('@javalce/prettier-config');

module.exports = {
  prettierConfig,
};
```

If you want to extend the shared config, you can do so by creating a `.prettierrc.cjs` file with the following content:

```js
const prettierConfig = require('@javalce/prettier-config');

module.exports = {
  ...prettierConfig,
  // ...yourPrettierConfig
  plugins: [
    ...prettierConfig.plugins,
    // ...yourPlugins
  ],
};
```

or by using ESM (`.prettierrc.mjs` or `prettierrc.js` if the `package.json` has `"type": "module"`):

```js
import prettierConfig from '@javalce/prettier-config';

export default {
  ...prettierConfig,
  // ...yourPrettierConfig
  plugins: [
    ...prettierConfig.plugins,
    // ...yourPlugins
  ],
};
```
