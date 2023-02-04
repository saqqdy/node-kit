<div style="text-align: center;" align="center">

# @node-kit/lerna-workspace-info

A simple utility to get the lerna workspace information

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
$ pnpm install -D @node-kit/lerna-workspace-info

# use yarn
$ yarn add -D @node-kit/lerna-workspace-info

# use npm
$ npm install -D @node-kit/lerna-workspace-info
```

## Usage

1. use `@node-kit/lerna-workspace-info` in async mode

```js
import { lernaWorkspaceInfo } from '@node-kit/lerna-workspace-info'

lernaWorkspaceInfo({
  cwd,
  packageManager: 'pnpm'
}).then(data => {
  console.log('The lerna workspace info is: ', data) // { projectA: { path: 'packages/projectA' } }
})
```

2. use `@node-kit/lerna-workspace-info` in sync mode

```js
import { lernaWorkspaceInfoSync } from '@node-kit/lerna-workspace-info'

console.log('The lerna workspace info is: ', lernaWorkspaceInfoSync()) // { projectA: { path: 'packages/projectA' } }
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/lerna-workspace-info.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/lerna-workspace-info
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/lerna-workspace-info/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/lerna-workspace-info&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/lerna-workspace-info.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/lerna-workspace-info?branch=master
[download-image]: https://img.shields.io/npm/dm/@node-kit/lerna-workspace-info.svg?style=flat-square
[download-url]: https://npmjs.org/package/@node-kit/lerna-workspace-info
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
