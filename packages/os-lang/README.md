<div style="text-align: center;" align="center">

# os-lang

Get the system lang

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
$ pnpm install -D os-lang

# use yarn
$ yarn add -D os-lang

# use npm
$ npm install -D os-lang
```

## Usage

use import

```js
import { osLang, osLangSync } from '@node-kit/os-lang'

osLang()
// or
osLangSync()
```

use require

```js
const { osLang, osLangSync } = require('@node-kit/os-lang')

osLang()
// or
osLangSync()
```

## API reference

- Usage: `osLang(cwd)` & `osLangSync(cwd)`
- Parameters:

<div class="table-prop">

| Param | Description  | Type     | Optional value | Required | Default value |
| ----- | ------------ | -------- | -------------- | -------- | ------------- |
| cwd   | running path | `string` | -              | `false`  | -             |

</div>

- Types:

```ts
declare type ModulesYML = Record<string, unknown> & {
  packageManager: string
}

declare function normalizePMSpec(pm: string): PackageManager

declare interface PackageManager {
  name: string
  version?: string
}

declare function osLang(cwd?: string): Promise<PackageManager | null>

declare function osLangSync(cwd?: string): PackageManager | null
```

- Demos:

1. simple use

```ts
import { osLang, osLangSync } from '@node-kit/os-lang'

osLang().then(info => {
  console.log('The package manager is: ', info) // { name: 'pnpm', version: '7.26.1' } | null
})
console.log('The package manager is: ', osLangSync()) // { name: 'pnpm', version: '7.26.1' } | null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/os-lang.svg?style=flat-square
[npm-url]: https://npmjs.org/package/os-lang
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/os-lang/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/os-lang&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/os-lang.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/os-lang?branch=master
[download-image]: https://img.shields.io/npm/dm/os-lang.svg?style=flat-square
[download-url]: https://npmjs.org/package/os-lang
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
