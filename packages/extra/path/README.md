<div style="text-align: center;" align="center">

# @node-kit/extra.path

Some shared extra utilities for nodejs build-in path modules

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
$ pnpm install -D @node-kit/extra.path

# use yarn
$ yarn add -D @node-kit/extra.path

# use npm
$ npm install -D @node-kit/extra.path
```

## Usage

```js
import { functionName } from '@node-kit/extra.path'

// run functionName
functionName()
```

## Function list

### 1. dirname

get dirname from path

- Usage: `dirname(path)`
- Parameters:

<div class="table-prop">

| Param | Description | Type     | Optional value | Required | Default value |
| ----- | ----------- | -------- | -------------- | -------- | ------------- |
| path  | simple path | `string` | -              | `true`   | -             |

</div>

- Types:

```ts
declare function dirname(path: string): string
```

- Demos:

1. simple use

```ts
import { dirname } from '@node-kit/extra.path'

const data = dirname('/path/of/dir/saqqdy')
// data => saqqdy
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/extra.path.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/extra.path
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/extra.path/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/extra.path&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/extra.path.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/extra.path?branch=master
[download-image]: https://img.shields.io/npm/dm/@node-kit/extra.path.svg?style=flat-square
[download-url]: https://npmjs.org/package/@node-kit/extra.path
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
