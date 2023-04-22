<div style="text-align: center;" align="center">

# workspace-pkgs

A simple utility to get the workspace project list

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
$ pnpm install -D workspace-pkgs

# use yarn
$ yarn add -D workspace-pkgs

# use npm
$ npm install -D workspace-pkgs
```

## Usage

use import

```js
import { workspacePkgs, workspacePkgsSync } from '@node-kit/workspace-pkgs'

workspacePkgs()
// or
workspacePkgsSync()
```

use require

```js
const { workspacePkgs, workspacePkgsSync } = require('@node-kit/workspace-pkgs')

workspacePkgs()
// or
workspacePkgsSync()
```

## API reference

- Usage: `workspacePkgs(cwd)` & `workspacePkgsSync(cwd)`
- Parameters:

<div class="table-prop">

| Param | Description  | Type     | Optional value | Required | Default value |
| ----- | ------------ | -------- | -------------- | -------- | ------------- |
| cwd   | running path | `string` | -              | `false`  | -             |

</div>

- Types:

```ts
declare function workspacePkgs(cwd?: string): Promise<string[] | null>

declare function workspacePkgsSync(cwd?: string): string[] | null
```

- Demos:

1. simple use

```ts
import { workspacePkgs, workspacePkgsSync } from '@node-kit/workspace-pkgs'

workspacePkgs().then(data => {
  console.log('The workspace projects is: ', data) // [ 'packages/utils', 'packages/monorepo-root' ]
})

console.log('The workspace projects is: ', workspacePkgsSync()) // [ 'packages/utils', 'packages/monorepo-root' ]
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/workspace-pkgs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/workspace-pkgs
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/workspace-pkgs/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/workspace-pkgs&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/workspace-pkgs.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/workspace-pkgs?branch=master
[download-image]: https://img.shields.io/npm/dm/workspace-pkgs.svg?style=flat-square
[download-url]: https://npmjs.org/package/workspace-pkgs
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
