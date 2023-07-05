<div style="text-align: center;" align="center">

# what-pm

Detects what package manager was used for installation

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
$ pnpm install what-pm

# use yarn
$ yarn add what-pm

# use npm
$ npm install what-pm
```

## Usage

use `what-pm` in terminal

```bash
npx what-pm
# or
npx whatpm

# output: pnpm
```

use import

```js
import { whatPM, whatPMSync } from '@node-kit/what-pm'

whatPM()
// or
whatPMSync()
```

use require

```js
const { whatPM, whatPMSync } = require('@node-kit/what-pm')

whatPM()
// or
whatPMSync()
```

## API reference

- Usage: `whatPM(pkgPath)` & `whatPMSync(pkgPath)`
- Parameters:

<div class="table-prop">

| Param   | Description  | Type     | Optional value | Required | Default value |
| ------- | ------------ | -------- | -------------- | -------- | ------------- |
| pkgPath | package path | `string` | -              | `true`   | -             |

</div>

- Types:

```ts
declare function whatPM(pkgPath: string): Promise<WhatPMResult | null>

declare interface WhatPMResult {
  name: string
  version: string
  isWorkspace: boolean
}

declare function whatPMSync(pkgPath: string): WhatPMResult | null
```

- Demos:

1. simple use

```ts
import { whatPM, whatPMSync } from '@node-kit/what-pm'

whatPM().then(info => {
  console.log('The package manager is: ', info) // pnpm | null
})

console.log('The package manager is: ', whatPMSync()) // pnpm | null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/what-pm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/what-pm
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/what-pm/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/what-pm&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/what-pm.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/what-pm?branch=master
[download-image]: https://img.shields.io/npm/dm/what-pm.svg?style=flat-square
[download-url]: https://npmjs.org/package/what-pm
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
