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
import {
  // getWinLang, // get windows lang
  // getWinLangSync,// get windows lang sync
  // getMacLang, // get mac os lang
  // getMacLangSync, // get mac os lang sync
  // getUnixLang, // get unix lang
  // getUnixLangSync, // get unix lang sync
  getEnvLang,
  osLang,
  osLangSync
} from 'os-lang'

osLang()
// or
osLangSync()
```

use require

```js
const { osLang, osLangSync } = require('os-lang')

osLang()
// or
osLangSync()
```

## API reference

- Usage: `osLang(options)` & `osLangSync(options)`
- Parameters: none

- Types:

```ts
declare function getEnvLang(env?: NodeJS.ProcessEnv): string | undefined

declare function getMacLang(): Promise<string>

declare function getMacLangSync(): string

declare function getUnixLang(): Promise<string | undefined>

declare function getUnixLangSync(): string | undefined

declare function getWinLang(): Promise<string | undefined>

declare function getWinLangSync(): string | undefined

declare type Lang = 'en-US' | 'zh-CN' | string

declare function osLang(options?: OsLangOptions): Promise<any>

declare function osLangSync(options?: OsLangOptions): any
```

- Demos:

1. simple use

```ts
import { osLang, osLangSync } from 'os-lang'

const lang = osLangSync()
// lang => zh-CN
```

2. Only resolve the locale from environment variables.

```ts
import { getEnvLang } from 'os-lang'

const lang = getEnvLang()
// lang => zh-CN
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
