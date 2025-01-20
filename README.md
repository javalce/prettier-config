# My Prettier Configuration

This is my personal Prettier configuration.

- [My Prettier Configuration](#my-prettier-configuration)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Extending the shared configuration](#extending-the-shared-configuration)

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

This shared configuration is exported as a function that receives an optional object with the configuration to be merged with the shared configuration.

The following example to configure Prettier with this shared configuration is using the `prettier.config.js` file using ES Modules, because recently, packages, like eslint, are moving its configuration files from `rc` files to `*.config.js` files.

But you can still use the `.prettierrc.js` file if you prefer. Also, you can use CommonJS if you prefer.

```js
import { defineConfig } from '@javalce/prettier-config';

export default defineConfig();
```

### Extending the shared configuration

If you want to extend the shared config or override some of its properties, you can pass an object to the `defineConfig` function.

> [!IMPORTANT]
> The `plugins` property is merged with the shared configuration, not replaced, so it will use the plugins from the shared configuration and the plugins you pass.

```js
import { defineConfig } from '@javalce/prettier-config';

export default defineConfig({
  semi: false,
  plugins: [
    // ...yourPlugins
  ],
});
```
