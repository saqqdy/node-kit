<div style="text-align: center;" align="center">

# workspace-root

A simple utility to get the workspace root

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Test coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

## Install

```bash
# use pnpm
$ pnpm install -D workspace-root

# use yarn
$ yarn add -D workspace-root

# use npm
$ npm install -D workspace-root
```

## Usage

1. use `workspace-root` in async mode

```js
import { workspaceRoot } from 'workspace-root'

workspaceRoot().then(path => {
  console.log('The workspace root is: ', path) // /Users/user/path/of/package/root or null
})
```

2. use `workspace-root` in sync mode

```js
import { workspaceRootSync } from 'workspace-root'

console.log('The workspace root is: ', workspaceRootSync()) // /Users/user/path/of/package/root or null
```

## Issues & Support

Please open an issue [here](https://github.com/saqqdy/workspace-root/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/workspace-root.svg?style=flat-square
[npm-url]: https://npmjs.org/package/workspace-root
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/workspace-root/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/workspace-root&utm_campaign=Badge_Grade
[codecov-image]: https://img.shields.io/codecov/c/github/saqqdy/workspace-root.svg?style=flat-square
[codecov-url]: https://codecov.io/github/saqqdy/workspace-root?branch=master
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_node-kit
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_node-kit
