<div style="text-align: center;" align="center">

# @node-kit/extra.cp

Some shared extra utilities for nodejs build-in child_process modules

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
$ pnpm install -D @node-kit/extra.cp

# use yarn
$ yarn add -D @node-kit/extra.cp

# use npm
$ npm install -D @node-kit/extra.cp
```

## Usage

use import

```js
import { execa, execaSync } from '@node-kit/extra.cp'

execa().then(() => {})
```

use require

```js
const { execa, execaSync } = require('@node-kit/extra.cp')

execa().then(() => {})
```

## API reference

### 1. execa & execaSync

make `exec` behave like `execa`

- Usage: `execa(file, args, options) & execaSync(file, args, options)`
- Parameters:

<div class="table-prop">

| Param   | Description                                     | Type                    | Optional value | Required | Default value |
| ------- | ----------------------------------------------- | ----------------------- | -------------- | -------- | ------------- |
| file    | The name or path of the executable file to run. | `string`                | -              | `true`   | -             |
| args    | List of string arguments.                       | `ReadonlyArray<string>` | -              | `false`  | -             |
| options | Options for execFile                            | `object`                | -              | `false`  | -             |

</div>

- Types:

```ts
import type {
  ExecFileOptions,
  ExecFileOptionsWithBufferEncoding,
  ExecFileOptionsWithStringEncoding,
  ExecFileSyncOptions,
  ExecFileSyncOptionsWithBufferEncoding,
  ExecFileSyncOptionsWithStringEncoding
} from 'node:child_process'
import type { ObjectEncodingOptions } from 'node:fs'

declare function execa(
  file: string,
  args?: ReadonlyArray<string> | undefined | null,
  options?:
    | ExecFileOptions
    | ((ObjectEncodingOptions & ExecFileOptions) | undefined | null)
    | ExecFileOptionsWithBufferEncoding
    | ExecFileOptionsWithStringEncoding
): Promise<{
  stdout: string | Buffer
  stderr: string | Buffer
}>

declare function execaSync(
  file: string,
  args?: ReadonlyArray<string>,
  options?:
    | ExecFileSyncOptions
    | ExecFileSyncOptionsWithBufferEncoding
    | ExecFileSyncOptionsWithStringEncoding
): string | Buffer
```

- Demos:

1. simple use

```ts
import { execa, execaSync } from '@node-kit/extra.cp'

execa().then(() => {})
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/extra.cp.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/extra.cp
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/extra.cp/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/extra.cp&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/extra.cp.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/extra.cp?branch=master
[download-image]: https://img.shields.io/npm/dm/@node-kit/extra.cp.svg?style=flat-square
[download-url]: https://npmjs.org/package/@node-kit/extra.cp
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
