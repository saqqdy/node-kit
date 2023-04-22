<div style="text-align: center;" align="center">

# monorepo-root

A simple utility to get the monorepo root

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D monorepo-root

# use yarn
$ yarn add -D monorepo-root

# use npm
$ npm install -D monorepo-root
```

## Usage

use import

```js
import { monorepoRoot, monorepoRootSync } from '@node-kit/monorepo-root'

monorepoRoot()
// or
monorepoRootSync()
```

use require

```js
const { monorepoRoot, monorepoRootSync } = require('@node-kit/monorepo-root')

monorepoRoot()
// or
monorepoRootSync()
```

## API reference

- Usage: `monorepoRoot(cwd)` & `monorepoRootSync(cwd)`
- Parameters:

<div class="table-prop">

| Param | Description  | Type     | Optional value | Required | Default value |
| ----- | ------------ | -------- | -------------- | -------- | ------------- |
| cwd   | running path | `string` | -              | `false`  | -             |

</div>

- Types:

```ts
declare function monorepoRoot(cwd?: string): Promise<string | null>

declare function monorepoRootSync(cwd?: string): string | null
```

- Demos:

1. simple use

```ts
import { monorepoRoot, monorepoRootSync } from '@node-kit/monorepo-root'

monorepoRoot().then(path => {
  console.log('The monorepo root is: ', path) // /Users/user/path/of/package/root or null
})
console.log('The monorepo root is: ', monorepoRootSync()) // /Users/user/path/of/package/root or null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/monorepo-root.svg?style=flat-square
[npm-url]: https://npmjs.org/package/monorepo-root
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/monorepo-root/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/monorepo-root&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/monorepo-root.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/monorepo-root?branch=master
[download-image]: https://img.shields.io/npm/dm/monorepo-root.svg?style=flat-square
[download-url]: https://npmjs.org/package/monorepo-root
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
