<div style="text-align: center;" align="center">

# @node-kit/yarn-workspace-root

A simple utility to get the yarn workspace root

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
$ pnpm install -D @node-kit/yarn-workspace-root

# use yarn
$ yarn add -D @node-kit/yarn-workspace-root

# use npm
$ npm install -D @node-kit/yarn-workspace-root
```

## Usage

use import

```js
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

yarnWorkspaceRoot()
// or
yarnWorkspaceRootSync()
```

use require

```js
const { yarnWorkspaceRoot, yarnWorkspaceRootSync } = require('@node-kit/yarn-workspace-root')

yarnWorkspaceRoot()
// or
yarnWorkspaceRootSync()
```

## API reference

- Usage: `yarnWorkspaceRoot(cwd)` & `yarnWorkspaceRootSync(cwd)`
- Parameters:

<div class="table-prop">

| Param | Description  | Type     | Optional value | Required | Default value |
| ----- | ------------ | -------- | -------------- | -------- | ------------- |
| cwd   | running path | `string` | -              | `false`  | -             |

</div>

- Types:

```ts
declare type Manifest =
  | (Record<string, unknown> & {
      packages: any
      workspaces: any
    })
  | null

declare function yarnWorkspaceRoot(cwd?: string): Promise<string | null>

declare function yarnWorkspaceRootSync(cwd?: string): string | null
```

- Demos:

1. simple use

```ts
import { yarnWorkspaceRoot, yarnWorkspaceRootSync } from '@node-kit/yarn-workspace-root'

yarnWorkspaceRoot().then(path => {
  console.log('The yarn workspace root is: ', path) // /Users/user/path/of/package/root or null
})
console.log('The yarn workspace root is: ', yarnWorkspaceRootSync()) // /Users/user/path/of/package/root or null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/yarn-workspace-root.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/yarn-workspace-root
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/yarn-workspace-root/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/yarn-workspace-root&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/yarn-workspace-root.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/yarn-workspace-root?branch=master
[download-image]: https://img.shields.io/npm/dm/@node-kit/yarn-workspace-root.svg?style=flat-square
[download-url]: https://npmjs.org/package/@node-kit/yarn-workspace-root
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
