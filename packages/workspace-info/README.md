<div style="text-align: center;" align="center">

# @node-kit/workspace-info

A simple utility to get the workspace information

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
$ pnpm install -D @node-kit/workspace-info

# use yarn
$ yarn add -D @node-kit/workspace-info

# use npm
$ npm install -D @node-kit/workspace-info
```

## Usage

1. use `@node-kit/workspace-info` in async mode

```js
import { workspaceInfo } from '@node-kit/workspace-info'

workspaceInfo({
  cwd,
  packageManager: 'pnpm'
}).then(path => {
  console.log('The workspace info is: ', path) // { projectA: { path: 'packages/projectA' } }
})
```

2. use `@node-kit/workspace-info` in sync mode

```js
import { workspaceInfoSync } from '@node-kit/workspace-info'

console.log('The workspace info is: ', workspaceInfoSync()) // { projectA: { path: 'packages/projectA' } }
```

3. get workspace project list

```js
import { getProjectSync } from '@node-kit/workspace-info'

console.log('The workspace project list is: ', getProjectSync()) // ['packages/projectA', 'packages/projectB']
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/node-kit/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/@node-kit/workspace-info.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@node-kit/workspace-info
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/@node-kit/workspace-info/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/@node-kit/workspace-info&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/@node-kit/workspace-info.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/@node-kit/workspace-info?branch=master
[download-image]: https://img.shields.io/npm/dm/@node-kit/workspace-info.svg?style=flat-square
[download-url]: https://npmjs.org/package/@node-kit/workspace-info
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
