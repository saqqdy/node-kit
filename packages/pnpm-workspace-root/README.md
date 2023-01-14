<div style="text-align: center;" align="center">

# @node-kit/pnpm-workspace-root

A simple utility to get the pnpm workspace root

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D @node-kit/pnpm-workspace-root

# use yarn
$ yarn add -D @node-kit/pnpm-workspace-root

# use npm
$ npm install -D @node-kit/pnpm-workspace-root
```

## Usage

1. use `@node-kit/pnpm-workspace-root` in async mode

```js
import { pnpmWorkspaceRoot } from '@node-kit/pnpm-workspace-root'

pnpmWorkspaceRoot().then(path => {
  console.log('The pnpm workspace root is: ', path) // /Users/user/path/of/package/root or null
})
```

2. use `@node-kit/pnpm-workspace-root` in sync mode

```js
import { pnpmWorkspaceRootSync } from '@node-kit/pnpm-workspace-root'

console.log('The pnpm workspace root is: ', pnpmWorkspaceRootSync()) // /Users/user/path/of/package/root or null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/@node-kit/pnpm-workspace-root/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/pnpm-workspace-root.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/pnpm-workspace-root
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/pnpm-workspace-root/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/pnpm-workspace-root&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/pnpm-workspace-root.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/pnpm-workspace-root?branch=master
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
