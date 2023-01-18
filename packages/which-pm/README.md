<div style="text-align: center;" align="center">

# @node-kit/which-pm

A simple utility to get which package manager used in the project

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D @node-kit/which-pm

# use yarn
$ yarn add -D @node-kit/which-pm

# use npm
$ npm install -D @node-kit/which-pm
```

## Usage

### use `@node-kit/which-pm` in bash window

```bash
npx which-pm

# output: pnpm@7.25.0 | null
```

### use `@node-kit/which-pm` as a library

1. use `@node-kit/which-pm` in async mode

```js
import { whichPM } from '@node-kit/which-pm'

whichPM().then(path => {
  console.log('The package manager is: ', path) // pnpm@7.25.0 | null
})
```

2. use `@node-kit/which-pm` in sync mode

```js
import { whichPMSync } from '@node-kit/which-pm'

console.log('The package manager is: ', whichPMSync()) // pnpm@7.25.0 | null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/which-pm.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/which-pm
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/which-pm/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/which-pm&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/which-pm.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/which-pm?branch=master
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
